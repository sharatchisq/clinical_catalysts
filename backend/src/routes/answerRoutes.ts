import express from "express";
import { saveAnswers, getAnswers, getAnswersByCondition } from "../controllers/answerController";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.post("/", saveAnswers);
router.get("/", getAnswers);
router.get("/condition/:condition", getAnswersByCondition);

export default router;
