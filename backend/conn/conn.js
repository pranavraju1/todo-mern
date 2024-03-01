const mongoose = require("mongoose");
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://pranav:pranavraju20@cluster0.bkw6ti0.mongodb.net/ToDoMERN"
      )
      .then(() => {
        console.log("mongoDb Connected");
      });
  } catch (err) {
    return res.send({
      status: 404,
      message: "server error: ",
      error: err,
    });
  }
};
conn();
