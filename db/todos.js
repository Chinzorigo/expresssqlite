const knex = require("./knex");

function postTodo(todo) {
    return knex("todos").insert(todo);
};

function getAllTodos(id) {
    return knex("todos").select("*");
};

function deleteTodo(id) {
    return knex("todos").where("id", id).del();
};

function updateTodo(id) {
    return knex("todos").where("id", id).update();
};


module.exports = {
    postTodo,
    getAllTodos,
    deleteTodo,
    updateTodo
}