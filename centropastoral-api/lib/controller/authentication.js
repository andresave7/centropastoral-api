"use strict";
//import logger from "../utils/logger";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Exception} from "handlebars";
// import {User as model} from "../models";
const admin = require("firebase-admin");
const user_1 = require("../controller/user");
// import {config} from "./../config/config";
// import {sendPasswordResetEmail} from "@firebase/auth";
class AuthenticationController {
    constructor() { }
    /**
     * Done thru the firebase-app library on the client.
     * @param req
     * @param res
     * @param next
     */
    async login(req, res, next) {
        try {
            res.status(401).send("Invalid Credentials");
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
    /**
     * Done thru the firebase-app library on the client.
     * @param req
     * @param res
     * @param next
     */
    async forgotPassword(req, res, next) {
        next();
    }
    async register(req, res, next) {
        try {
            const dbresponse = await admin.auth().createUser({
                email: req.body.email,
                emailVerified: false,
                password: req.body.password,
                disabled: false,
            });
            if (dbresponse.uid) {
                user_1.default.create(req, res, next);
            }
            else {
                next();
            }
            res.status(500).send("Error creating user");
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
exports.default = new AuthenticationController();
//# sourceMappingURL=authentication.js.map