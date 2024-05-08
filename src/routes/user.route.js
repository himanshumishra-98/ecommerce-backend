import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { 
  loginUser, 
  logoutUser, 
  registerUser, 
  refreshAccessToken
} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"


const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1
  }, 
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,  logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)

export default router;
