import controller from "../controller/series";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/")
    .get((req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next))
    .post((req: Request, res: Response, next: NextFunction) => controller.create(req, res, next));

router.route("/:seriesId")
    .get((req: Request, res: Response, next: NextFunction) => controller.findOne(req, res, next))
    .delete((req: Request, res: Response, next: NextFunction) => controller.destroy(req, res, next))
    .put((req: Request, res: Response, next: NextFunction) => controller.update(req, res, next));

export default router;
