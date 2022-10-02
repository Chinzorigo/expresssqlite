// Tested with Postman. But Couldn't connect to frontend.

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db/todos");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", async (req, res) => {
    const results = await db.postTodo(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/", async (req, res) => {
    const todos = await db.getAllTodos();
    res.status(200).json({ todos });
});

app.patch("/:id", async (req, res) => {
    const id = await db.updateTodo(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/:id", async (req, res) => {
    await db.deleteTodo(req.params.id);
    res.status(200).json({ success: true });
});


app.listen(1337, () => console.log("server is running on port 1337"));