import { connectToDB } from "../utils/connect.js";
import Todo from "../models/todoModel.js";
import { createError } from "../utils/error.js";


export async function getAllTodos(req, res, next) {
    await connectToDB();
    const todos = await Todo.find({ userID: req.user.id })
    res.status(200).send(todos);
}

export async function addTodo(req, res, next) {
    console.log(req.body);
    if(!req.body || !req.body.title) {
        return next(createError(400, "Title is required"));
    }
    await connectToDB();
    const newTodo = new Todo({ title: req.body.title, userID: req.user.id });
    await newTodo.save();
    res.status(201).json(newTodo);
}


export async function getTodo(req, res, next) {
   try {
    await connectToDB();
    const todo = await Todo.findById(req.params.id);

    if(!todo) {
        return next(createError(404, "Todo not found"));
    }

    if(todo.userID.toString() !== req.user.id) {
        return next(createError(403, "Unauthorized"));
    }

    res.status(200).send(todo);
   } catch (error) {
        return next(createError(404, "Todo not found"));
   }
}


export async function updateTodo(req, res, next) {
    const id = req.params.id;

    if(!req.body) {
        return next(createError(400, "Missing Fields"));
    }

    try {
        await connectToDB();
        const todo = await Todo.findById(id);
        if(todo.userID.toString() !== req.user.id) {
            return next(createError(403, "Unauthorized"));
        }

        todo.title = req.body.title || todo.title;

        if(req.body.isCompleted !== undefined) {
            todo.isCompleted = req.body.isCompleted;
        }

        await todo.save();
        res.status(200).json({ message: "Todo Updated Successfully" });
    } catch (error) {
        return next(createError(404, "Todo not found"));
    }
}

export async function deleteTodo(req, res, next) {
    try {
        await connectToDB();
        const todo = await Todo.deleteOne({
            _id: req.params.id,
            userID: req.user.id
        });

        if(!todo.deletedCount) {
            return next(createError(404, "Todo not found"));
        }
        res.status(200).json({ message: "Todo Deleted Successfully" });
    } catch (error) {
        return next(createError(404, "Todo not found"));
    }
}