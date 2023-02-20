import { Router } from "express";
import passport from "passport";

export const router = Router();

router.get("/login/failed", (req, res) => {
  res.status(400).json({
    success: false,
    message: "failure",
  });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_API,
    failureRedirect: "/login/failed",
  })
);

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_API);
});
