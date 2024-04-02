import controller from "../controller/purchases";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/")
    .get((req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next))
    .post((req: Request, res: Response, next: NextFunction) => controller.create(req, res, next));

router.route("/:purchaseId")
    .get((req: Request, res: Response, next: NextFunction) => controller.findOne(req, res, next));

export default router;
