import { Router } from "express";
import * as authController from "../controllers/auth.controller.js"

const authRouter = Router();

//to register user
authRouter.post("/register",authController.register)

//to login
authRouter.post("/login",authController.login)

// to get user info
authRouter.get("/get-me",authController.getMe)

// for refresh token
authRouter.get("/refresh-token",authController.refreshToken)

//to logout
authRouter.get("/logout",authController.logout)

// to logout from all devices 
authRouter.get("/logout-all",authController.logoutAll)

// to verify email
authRouter.get("/verify-email",authController.verifyEmail)

export default authRouter;