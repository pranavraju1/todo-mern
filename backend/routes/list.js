const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// create todo
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list); //updating the list in user
      existingUser.save();
    }
  } catch (err) {
    console.log(err);
  }
});

// update
router.post("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => {
        res.status(200).json({ message: "task updated" });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existingUser = await User.findByIdAndUpdate(id, {
      $pull: { list: req.params.id },
    }); //to remove the id from the list in user
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).json({ message: "task deleted" });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//getTask
router.get("/getTasks/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 }); //created first will come first
  if (list.length !== 0) {
    res.status(200).json({ list });
  } else {
    res.status(200).json({ message: "No Tasks" });
  }
});
module.exports = router;
