import controller from "../controller/subscription";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/")
    .get((req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next));

router.route("/:subscriptionId")
    .get((req: Request, res: Response, next: NextFunction) => controller.findOne(req, res, next));


export default router;
