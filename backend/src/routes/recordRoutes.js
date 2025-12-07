import { Router } from "express";
import { getRecords, createRecord, updateRecord, deleteRecord } from "../controllers/recordController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router();
router.use(authMiddleware);

router.get("/", getRecords);
router.post("/", createRecord);
router.put("/:id", updateRecord);
router.delete("/:id", deleteRecord);

export default router;
