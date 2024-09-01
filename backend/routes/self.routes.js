import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getSelf } from "../controllers/self.controller.js";

const router = express.Router();

router.get("/", protectRoute, getSelf);

export default router;
