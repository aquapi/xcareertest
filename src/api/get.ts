import { Group, wrap } from '@stricjs/router';
import { qs } from '@stricjs/utils';
import db from '../db';
import jwt from 'jsonwebtoken';
import badReq from '../utils/badReq';

const getMax = qs.searchKey('maxQuantity'),
    getAll = db.query('select * from Inventory'),
    getAllMax = db.query('select * from Inventory where instock <= ?'),
    getOrderDes = db.query('select * from Orders inner join Inventory on Inventory.sku = Orders.item');

export default new Group('/get')
    // Validation
    .guard('/', c => {
        const token = c.headers.get('Authorization');
        if (token === null) return null;

        try {
            return jwt.verify(token, Bun.env.JWT_SECRET as string);
        } catch (e) {
            return null;
        }
    })
    // Rejection
    .reject('/', () => badReq('Invalid credentials'))
    // Other routes
    .get('/products', c => {
        const maxQuantity = getMax(c);

        return wrap.json(
            maxQuantity === null
                ? getAll.all()
                : getAllMax.all(maxQuantity)
        );
    })
    .get('/orders', () => wrap.json(getOrderDes.all()));
