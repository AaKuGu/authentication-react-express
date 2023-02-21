const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
      });
    }
  } catch (error) {
    res.status(400).send("error /login/success : ", error.message);
  }
});

router.get("/login/failed", (req, res) => {
  try {
    res.status(400).json({
      success: false,
      message: "failure",
    });
  } catch (error) {
    res.status(400).send("error /login/success : ", error.message);
  }
});

router.get("/google", (req, res) => {
  try {
    passport.authenticate("google", { scope: ["profile"] });
  } catch (error) {
    res.status(400).send("error /login/success : ", error.message);
  }
});

router.get("/google/callback", (req, res) => {
  try {
    passport.authenticate("google", {
      successRedirect: process.env.CLIENT_API,
      failureRedirect: "/login/failed",
    });
  } catch (error) {
    res.status(400).send("error /login/success : ", error.message);
  }
});

router.get("/logout", (req, res) => {
  try {
    req.logout();
    res.redirect(process.env.CLIENT_API);
  } catch (error) {
    res.status(400).send("error /login/success : ", error.message);
  }
});
