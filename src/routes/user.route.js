import { Router } from "express";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
  }, 
  ])
);

export default router;
