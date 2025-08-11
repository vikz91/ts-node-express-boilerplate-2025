import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello article");
});

export default router;
