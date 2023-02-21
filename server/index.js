const express = require("express");
// import dotenv from "dotenv";
const passport = require("passport");
const router = require("./router/authRouter");
const cors = require("cors");
const cookieSession = require("cookie-session");

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.cookieSession());

// const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.status(200).send({ message: "api is working...!" });
});

app.use("/auth", router);

app.listen(process.env.PORT);
