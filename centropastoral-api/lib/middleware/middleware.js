"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAndAuthorizeAdmin = exports.apiLimiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
const admin = require("firebase-admin");
//import {User} from "../models/user";
const verifyTokenAndAuthorizeAdmin = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(403).send("Unauthorized");
    }
    const idToken = authorizationHeader.split("Bearer ")[1];
    try {
        console.log(idToken);
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        console.log("uid", decodedToken.uid);
        // const user = await User.findOne({ where: { email: decodedToken.email } });
        // if (!user) {
        //   return res.status(404).send("User not found");
        // }
        // // Check if the user is an admin
        // if (user.roleId.toString() !== "1") {
        //   return res.status(403).send("Insufficient permissions");
        // }
        // // User is verified as an admin; proceed with the request
        // req.body = user; // Optionally attach user info to the request
        return next();
    }
    catch (error) {
        console.error("Error verifying Firebase ID token:", error);
        return res.status(403).send("Unauthorized");
    }
};
exports.verifyTokenAndAuthorizeAdmin = verifyTokenAndAuthorizeAdmin;
const apiLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again after 15 minutes",
});
exports.apiLimiter = apiLimiter;
//# sourceMappingURL=middleware.js.map