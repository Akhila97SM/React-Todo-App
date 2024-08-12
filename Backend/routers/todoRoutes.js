const express =require("express");
const router =express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todoController");

// get all todo
router.get("/",getAllTodo);

// add a new todo
router.post("/",postCreateTodo);

// update todo
router.put("/:id",putUpdateTodo);

// delete todo
router.delete("/:id",deleteTodo);

module .exports =router;