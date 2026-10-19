import { Router } from "express";
import { registerUser } from "../src/services/register.service.js";
import { loginUser } from "../src/services/login.service.js";

const router = Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;
