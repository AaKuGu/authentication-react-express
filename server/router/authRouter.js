import { Router } from "express";

export const router = Router();

router.get("/google", (req, res) => {
  const name = "Aadarsh";
  res.send(200).send({ name: name });
});
