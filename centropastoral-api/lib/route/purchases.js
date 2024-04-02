"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchases_1 = require("../controller/purchases");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res, next) => purchases_1.default.findAll(req, res, next))
    .post((req, res, next) => purchases_1.default.create(req, res, next));
router.route("/:purchaseId")
    .get((req, res, next) => purchases_1.default.findOne(req, res, next));
exports.default = router;
//# sourceMappingURL=purchases.js.map