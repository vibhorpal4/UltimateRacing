import express from "express";
import { loginSuccess } from "../controllers/authController.js";

const router = express.Router();

router.get("/success", loginSuccess);
router.get("/error", (req, res) => {
  res.json("error logging in");
});

export default router;
