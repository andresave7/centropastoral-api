"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("./../models/order");
const models_1 = require("../models");
const includeModel = [{
        model: models_1.Purchase,
        as: "purchase",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        include: [{
                model: models_1.Series,
                as: "series",
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                include: [{
                        model: models_1.Product,
                        as: "products",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"],
                        },
                    }],
                required: true,
            }],
    }];
class OrderController {
    constructor() { }
    async findAll(req, res, next) {
        try {
            const dbresponse = await order_1.Order.findAll({
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
                res.status(500).send("An unexpected error occurred");
            }
        }
    }
    async findOne(req, res, next) {
        try {
            const dbresponse = await order_1.Order.findByPk(req.params.orderId, { include: includeModel });
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
            const dbresponse = await order_1.Order.create(req.body);
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
            const [updatedRows] = await order_1.Order.update(req.body, { where: { orderId: req.params.id } });
            if (updatedRows > 0) {
                const updatedRow = await order_1.Order.findByPk(req.params.id);
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
            const deletedRows = await order_1.Order.destroy({ where: { orderId: req.params.id } });
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
exports.default = new OrderController();
//# sourceMappingURL=order.js.map