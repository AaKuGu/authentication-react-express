import express from "express";
// import dotenv from "dotenv";
import passport from "passport";
import { router } from "./router/authRouter";

// dotenv.config();

const app = express();

app.use(passport.initialize());

// const PORT = process.env.PORT
// app.use("/auth", router);

app.get("/", (req, res) => {
  res.status(200).send({ message: "api is working...!" });
});

router.get("/auth/google", (req, res) => {
  const name = "Aadarsh";
  res.send(200).send({ name: name });
});

app.listen(process.env.PORT);
