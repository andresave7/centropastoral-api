"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const models_2 = require("../models");
const models_3 = require("../models");
const includeModel = [{
        model: models_2.Series,
        as: "series",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        include: [{
                model: models_3.Product,
                as: "products",
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            }],
        required: true,
    }];
class PurchaseController {
    constructor() { }
    async findAll(req, res, next) {
        try {
            const dbresponse = await models_1.Purchase.findAll({
                where: req.query,
                include: includeModel,
            });
            res.json(dbresponse);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500)
                    .send("An unexpected error occurred");
            }
        }
    }
    async findOne(req, res, next) {
        try {
            const dbresponse = await models_1.Purchase.findByPk(req.params.purchaseId, { include: includeModel });
            if (!dbresponse) {
                throw "empty";
            }
            res.json(dbresponse);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
    async search(req, res, next) {
        try {
            res.json("Order Search");
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
    async create(req, res, next) {
        try {
            const dbresponse = await models_1.Purchase.create(req.body);
            res.json(dbresponse);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
    async update(req, res, next) {
        try {
            const [updatedRows] = await models_1.Purchase.update(req.body, { where: { purchaseId: req.params.id } });
            if (updatedRows > 0) {
                const updatedRow = await models_1.Purchase.findByPk(req.params.id);
                res.json(updatedRow);
            }
            else {
                res.status(404).send("Order not found");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
    async destroy(req, res, next) {
        try {
            const deletedRows = await models_1.Purchase.destroy({ where: { purchaseId: req.params.id } });
            if (deletedRows > 0) {
                res.status(204).send();
            }
            else {
                res.status(404).send("Order not found");
            }
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message);
            }
            else {
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
}
exports.default = new PurchaseController();
//# sourceMappingURL=purchases.js.map