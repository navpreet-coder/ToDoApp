require("dotenv").config();
const express = require("express");
const { z } = require("zod");
const { todoModel, userModel } = require("./db/db");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
// console.log("prices", process.env.MONGODB_URL);

//////zod validations/////
const SignUpValidations = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
  email: z.string().email(),
});
///////////////////////////

app.post("/signup", async (req, res) => {
  console.log("req", req.body);
  await userModel.create(req.body);
  res.status(200).json({
    message: "User Created Successfully!",
  });
});

app.post("/signin", async (req, res) => {
  const foundUser = await userModel.findOne(req.body);
  console.log("found user is ", foundUser, process.env.JWT_KEY, req.body.email);

  if (!foundUser) {
    res.status(411).json({
      message: "User not found!",
    });
    return;
  }
  const token = jwt.sign(
    {
      email: req.body.email,
    },
    process.env.JWT_KEY,
    { expiresIn: "1h" }
  );
  res.status(200).json({
    message: "Successfully Logged In!",
    token: token,
  });
});
app.get("/getTodo", async (req, res) => {
  const token = req.query.token;
  if (!token) {
    res.status(411).json({
      message: "token not found!",
    });
    return;
  }
  try {
    const decodedJwt = jwt.verify(token, process.env.JWT_KEY);
    console.log("see json ", decodedJwt);
    // const todoList = await todoModel.find().select("-_id -__v").lean();
    const todoList = await todoModel.find();
    console.log("todo list ", todoList);

    res.status(200).json({
      message: "here is list of todos",
      todos: todoList,
    });
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token signature" });
    } else if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired" });
    } else {
      return res.status(401).json({ error: "Token verification failed" });
    }
  }
});

app.post("/createTodo", async (req, res) => {
  //req will be email, title
  await todoModel.create(req.body);
  res.status(200).json({
    message: "successfully Created",
  });
});

app.delete("/deleteTodo/:id", async (req, res) => {
  const { id } = req.params;
  const deleteTodo = await todoModel.findByIdAndDelete(id);
  if (!deleteTodo) {
    res.status(411).json({
      message: "to do not found!",
    });
    return;
  }
  res.status(200).json({
    message: "successfully Deleted",
    id: deleteTodo._id,
  });
});

app.listen("3000", () => {
  console.log("listening at http://localhost:3000");
});
