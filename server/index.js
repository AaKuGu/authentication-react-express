const express = require("express");
// import dotenv from "dotenv";
const passport = require("passport");
const router = require("./router/authRouter");
const cors = require("cors");

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

// const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.status(200).send({ message: "api is working...!" });
});

app.use("/auth", router);

app.listen(process.env.PORT);
