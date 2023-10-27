import db from '..';

const str = await Bun.file(
    import.meta.dir + '/query.sql'
).text();

// Split and run statements
let statement: string, statements = str.split(';');
for (statement of statements) {
    statement = statement.trim();
    if (!statement) continue;

    db.run(statement);
}
