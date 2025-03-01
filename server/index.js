import express from "express";
import AuthRoute from "./routes/auth.js";
import TodoRoute from "./routes/todo.js";

const app = express();
const PORT = 3000;


app.use("/api/user", AuthRoute);
app.use("/api/todos", TodoRoute);


app.get("/", (req, res, next) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});