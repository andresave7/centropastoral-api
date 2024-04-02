//import logger from "../utils/logger";
import {Request, Response, NextFunction} from "express";
import {Purchase as model} from "../models";
import {Series as series} from "../models";
import {Product as product} from "../models";

const includeModel = [{
  model: series,
  as: "series",
  attributes: {
    exclude: ["createdAt", "updatedAt"],
  },
  include: [{
    model: product,
    as: "products",
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  }],
  required: true,
}];

class PurchaseController {
  constructor() { }

  public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dbresponse = await model.findAll({
        where: req.query,
        include: includeModel,
      });
      res.json(dbresponse);
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500)
            .send("An unexpected error occurred");
      }
    }
  }

  public async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dbresponse = await model.findByPk(req.params.purchaseId, {include: includeModel});
      if (!dbresponse) {
        throw "empty";
      }
      res.json(dbresponse);
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async search(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json("Order Search");
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dbresponse = await model.create(req.body);
      res.json(dbresponse);
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const [updatedRows] = await model.update(req.body, {where: {purchaseId: req.params.id}});
      if (updatedRows > 0) {
        const updatedRow = await model.findByPk(req.params.id);
        res.json(updatedRow);
      } else {
        res.status(404).send("Order not found");
      }
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const deletedRows = await model.destroy({where: {purchaseId: req.params.id}});
      if (deletedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).send("Order not found");
      }
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }
}

export default new PurchaseController();
