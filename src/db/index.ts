import Database from "bun:sqlite";

export default new Database(
    import.meta.dir + '/db.sqlite',
    { create: true }
);
