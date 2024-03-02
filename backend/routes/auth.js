const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//Sign in
//post bc we have to send data from frontend to backend
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashedpassword });
    await user.save().then(() => {
      return res.status(200).json({ message: "Sign Up Successfull" });
    });
  } catch (err) {
    console.log(err.message);
    return res
      .status(200)
      .json({ message: "User already exists", error: err.message });
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).json({ message: "Please Sign Up First" });
    }
    const isPasswordMatch = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res.status(200).json({ message: "Wrong password" });
    }
    const { password, ...others } = user._doc; //give me everyting except the password
    return res.status(200).json({ others });
  } catch (err) {
    console.log(err.message);
    return res
      .status(200)
      .json({ message: "User already exists", error: err.message });
  }
});

module.exports = router;
