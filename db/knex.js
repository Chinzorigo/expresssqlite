const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "todo_list.sqlite3"
    }
});

module.exports = connectedKnex;