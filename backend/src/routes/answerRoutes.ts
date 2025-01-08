import express from "express";
import { saveAnswers, getAnswers } from "../controllers/answerController";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.post("/", saveAnswers);
router.get("/", getAnswers);

export default router;
