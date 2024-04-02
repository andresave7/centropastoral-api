"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("../controller/authentication");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/login")
    .post((req, res, next) => authentication_1.default.login(req, res, next));
router.route("/forgot-password")
    .post((req, res, next) => authentication_1.default.forgotPassword(req, res, next));
router.route("/register")
    .post((req, res, next) => authentication_1.default.register(req, res, next));
exports.default = router;
//# sourceMappingURL=authentication.js.map