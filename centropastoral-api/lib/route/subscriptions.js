"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subscription_1 = require("../controller/subscription");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/")
    .get((req, res, next) => subscription_1.default.findAll(req, res, next));
router.route("/:subscriptionId")
    .get((req, res, next) => subscription_1.default.findOne(req, res, next));
exports.default = router;
//# sourceMappingURL=subscriptions.js.map