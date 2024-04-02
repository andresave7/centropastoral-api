import controller from "../controller/authentication";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/login")
    .post((req: Request, res: Response, next: NextFunction) => controller.login(req, res, next));

router.route("/forgot-password")
    .post((req: Request, res: Response, next: NextFunction) => controller.forgotPassword(req, res, next));

router.route("/register")
    .post((req: Request, res: Response, next: NextFunction) => controller.register(req, res, next));

export default router;
