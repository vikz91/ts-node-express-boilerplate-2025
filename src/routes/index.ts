import { Router } from "express";
import article from "./article";
import meta from "./_meta";

const router = Router();

router.use("/article", article);
router.use("/", meta);

export default router;
