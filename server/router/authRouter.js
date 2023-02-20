import { Router } from "express";

export const router = Router();

router.get("/google", (req, res) => {
  const name = "Aadarsh";
  res.status(200).send({ name: name });
});

router.get("/sohan", (req, res) => {
  res.status(200).send("sohan is working fine... !");
});
