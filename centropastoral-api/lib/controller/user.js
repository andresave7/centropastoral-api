"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const models_2 = require("../models");
const models_3 = require("../models");
const productHandler_1 = require("../core/productHandler");
const includeModel = [{
        model: models_2.Role,
        as: "role",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        required: true,
    },
    {
        model: models_3.Subscription,
        as: "subscription",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        required: true,
    }];
class UserController {
    constructor() { }
    async findAll(req, res, next) {
        try {
            const dbresponse = await models_1.User.findAll({
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
            const dbresponse = await models_1.User.findByPk(req.params.userId, { include: includeModel });
            if (!dbresponse)
                res.status(404).send("Invalid user");
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
            res.json("User Search");
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
            const dbresponse = await models_1.User.create(req.body);
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
            const [updatedRows] = await models_1.User.update(req.body, { where: { userId: req.params.id } });
            if (updatedRows > 0) {
                const updatedRow = await models_1.User.findByPk(req.params.id);
                res.json(updatedRow);
            }
            else {
                res.status(404).send("User not found");
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
            const deletedRows = await models_1.User.destroy({ where: { userId: req.params.id } });
            if (deletedRows > 0) {
                res.status(204).send();
            }
            else {
                res.status(404).send("User not found");
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
    async getUserProducts(req, res, next) {
        try {
            const series = await productHandler_1.default.getUserProducts(req.params.userId);
            res.json(series);
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
exports.default = new UserController();
//# sourceMappingURL=user.js.map