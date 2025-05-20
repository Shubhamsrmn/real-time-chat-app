import express from "express";
import {
  getProfileFun,
  userLoginFun,
  createUserFun,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getProfileFun);
router.post("/login", userLoginFun);
router.post("/register", createUserFun);

export default router;
