import Router from "express";
import { getBeerList } from "../controllers/beersController.js";
import { addBeers } from "../controllers/beersController.js";
const router = Router();
router.get("/",getBeerList);
router.post("/",addBeers);
export default router;