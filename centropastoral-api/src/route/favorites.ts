import controller from "../controller/favorites";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/")
    .post((req: Request, res: Response, next: NextFunction) => controller.create(req, res, next))
    .delete((req: Request, res: Response, next: NextFunction) => controller.destroy(req, res, next))

router.route("/:userId")
    .get((req: Request, res: Response, next: NextFunction) => controller.findByUser(req, res, next))

export default router;
