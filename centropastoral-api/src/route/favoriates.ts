import controller from "../controller/user";
import {Router, Request, Response, NextFunction} from "express";

const router = Router();

router.route("/:favoriteId")
    .get((req: Request, res: Response, next: NextFunction) => controller.findOne(req, res, next))
    .put((req: Request, res: Response, next: NextFunction) => controller.update(req, res, next))
    .delete((req: Request, res: Response, next: NextFunction) => controller.destroy(req, res, next));


router.route("/")
    .get((req: Request, res: Response, next: NextFunction) => controller.findAll(req, res, next));


export default router;
