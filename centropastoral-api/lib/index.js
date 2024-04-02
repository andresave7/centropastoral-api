"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const helmet_1 = require("helmet");
// import dotenv from "dotenv";
const routes_1 = require("./route/routes");
const admin = require("firebase-admin");
const config_1 = require("./config/config");
const functions = require("firebase-functions");
const cors = require("cors");
// dotenv.config();
const app = express();
const serviceAccount = config_1.config.firebaseConfig;
app.use(cors({ origin: true }));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
app.use((0, helmet_1.default)());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Provide a default port if none is specified in .env
// app.use(middleware.checkErrors);
app.use("/v1/", routes_1.publicRouter);
app.get("/", (req, res) => {
    res.send("Centro Pastoral API");
});
// // Simplified server startup logic
// app.listen(port, () => {
//   console.log(`App (${process.env.NODE_ENV}) 
//   listening on port: ${port}`);
// });
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map