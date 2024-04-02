"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../controller/category");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res, next) => category_1.default.findAll(req, res, next))
    .post((req, res, next) => category_1.default.create(req, res, next));
router.route("/:categoryId")
    .get((req, res, next) => category_1.default.findOne(req, res, next))
    .delete((req, res, next) => category_1.default.destroy(req, res, next))
    .put((req, res, next) => category_1.default.update(req, res, next));
exports.default = router;
//# sourceMappingURL=category.js.map