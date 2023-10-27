import { Group, wrap } from "@stricjs/router";
import { guard } from "@stricjs/utils";
import db from "../db";
import jwt from 'jsonwebtoken';
import badReq from "../utils/badReq";

const validate = guard.create({
    username: 'str',
    password: 'str'
}), search = db.query('select * from Users where username = ? and password = ? limit 1');

export default new Group()
    .post('/login', async c => {
        const body = validate(await c.json());
        if (body === null) return badReq('Username and password are required');

        // Search for corresponding username and password in the DB
        if (search.get(body.username, body.password) === null) return badReq('Invalid username or password');

        // Remove sensitive data
        body.password = '';
        return wrap.plain(
            jwt.sign(body, Bun.env.JWT_SECRET as string)
        );
    });
