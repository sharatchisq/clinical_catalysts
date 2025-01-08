import express from "express";
import  { saveAnswers }  from "../controllers/answerController";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.post("/", saveAnswers); 


export default router;