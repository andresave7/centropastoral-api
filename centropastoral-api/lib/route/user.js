"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controller/user");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/:userId")
    .get((req, res, next) => user_1.default.findOne(req, res, next))
    .put((req, res, next) => user_1.default.update(req, res, next))
    .delete((req, res, next) => user_1.default.destroy(req, res, next));
router.route("/")
    .get((req, res, next) => user_1.default.findAll(req, res, next));
exports.default = router;
//# sourceMappingURL=user.js.map