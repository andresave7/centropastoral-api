"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./../models");
const includeModel = [{
        model: models_1.Product,
        as: "products",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        required: true,
    },
    {
        model: models_1.Category,
        as: "category",
        attributes: {
            exclude: ["createdAt", "updatedAt"],
        },
        required: true,
    },
];
class SeriesController {
    constructor() { }
    async findAll(req, res, next) {
        try {
            const dbresponse = await models_1.Series.findAll({
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
            const dbresponse = await models_1.Series.findByPk(req.params.seriesId, { include: includeModel });
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
            res.json("Series Search");
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
            const dbresponse = await models_1.Series.create(req.body);
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
            const [updatedRows] = await models_1.Series.update(req.body, { where: { seriesId: req.params.id } });
            if (updatedRows > 0) {
                const updatedRow = await models_1.Series.findByPk(req.params.id);
                res.json(updatedRow);
            }
            else {
                res.status(404).send("Series not found");
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
            const deletedRows = await models_1.Series.destroy({ where: { seriesId: req.params.id } });
            if (deletedRows > 0) {
                res.status(204).send();
            }
            else {
                res.status(404).send("Series not found");
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
exports.default = new SeriesController();
//# sourceMappingURL=series.js.map