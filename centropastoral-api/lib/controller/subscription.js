"use strict";
//import logger from "../utils/logger";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class SubscriptionController {
    constructor() { }
    async findAll(req, res, next) {
        try {
            const dbresponse = await models_1.Subscription.findAll({
                where: req.query,
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
            const dbresponse = await models_1.Subscription.findByPk(req.params.subscriptionId);
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
            res.json("Subscription Search");
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
            const dbresponse = await models_1.Subscription.create(req.body);
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
            const [updatedRows] = await models_1.Subscription.update(req.body, { where: { subscriptionId: req.params.id } });
            if (updatedRows > 0) {
                const updatedRow = await models_1.Subscription.findByPk(req.params.id);
                res.json(updatedRow);
            }
            else {
                res.status(404).send("Subscription not found");
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
            const deletedRows = await models_1.Subscription.destroy({ where: { subscriptionId: req.params.id } });
            if (deletedRows > 0) {
                res.status(204).send();
            }
            else {
                res.status(404).send("Subscription not found");
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
exports.default = new SubscriptionController();
//# sourceMappingURL=subscription.js.map