import { Router } from "express";

export const router = Router();

router.get("/google", (req, res) => {
  res.send(200).json({ message: "/auth/google is working fine" });
});
