"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../controller/product");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res, next) => product_1.default.findAll(req, res, next))
    .post((req, res, next) => product_1.default.create(req, res, next));
router.route("/:productId")
    .get((req, res, next) => product_1.default.findOne(req, res, next))
    .delete((req, res, next) => product_1.default.destroy(req, res, next))
    .put((req, res, next) => product_1.default.update(req, res, next));
exports.default = router;
//# sourceMappingURL=product.js.map