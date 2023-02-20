import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();

// const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.status(200).send({ message: "api is working...!" });
});

app.listen(process.env.PORT);
