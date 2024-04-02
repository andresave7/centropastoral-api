"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const series_1 = require("../controller/series");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res, next) => series_1.default.findAll(req, res, next))
    .post((req, res, next) => series_1.default.create(req, res, next));
router.route("/:seriesId")
    .get((req, res, next) => series_1.default.findOne(req, res, next))
    .delete((req, res, next) => series_1.default.destroy(req, res, next))
    .put((req, res, next) => series_1.default.update(req, res, next));
exports.default = router;
//# sourceMappingURL=series.js.map