const mongoose = require("mongoose");

console.log("mongo url ", process.env.MONGODB_URL);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongoose is connected");
  })
  .catch((e) => {
    console.log("exception is ", e);
  });

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedOn: {
    type: Boolean,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const todoModel = mongoose.model("Todo", todoSchema);
const userModel = mongoose.model("User", userSchema);
module.exports = { todoModel, userModel };
