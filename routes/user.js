const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });
  res.redirect("/");
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("login",{
        error:"Incorrect email or password"
    })
  }
});
router.get("/logout",(req, res) => {
  res.clearCookie("token").redirect("/");
})
module.exports = router;
