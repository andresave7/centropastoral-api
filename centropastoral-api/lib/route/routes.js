"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRouter = void 0;
const product_1 = require("./product");
const series_1 = require("./series");
const user_1 = require("./user");
const authentication_1 = require("./authentication");
const order_1 = require("./order");
const subscriptions_1 = require("./subscriptions");
const purchases_1 = require("./purchases");
const category_1 = require("./category");
const express = require("express");
const middleware_1 = require("../middleware/middleware");
const publicRouter = express.Router();
exports.publicRouter = publicRouter;
publicRouter.use("/product", middleware_1.apiLimiter, product_1.default);
publicRouter.use("/serie", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, series_1.default);
publicRouter.use("/user", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, user_1.default);
publicRouter.use("/order", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, order_1.default);
publicRouter.use("/subscriptions", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, subscriptions_1.default);
publicRouter.use("/purchases", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, purchases_1.default);
publicRouter.use("/category", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, category_1.default);
// publicRouter.use('/product', apiLimiter,   productRoutes);
// publicRouter.use('/serie', apiLimiter, seriesRoutes);
// publicRouter.use('/user',apiLimiter, userRoutes);
// publicRouter.use('/order',apiLimiter, orderRoutes);
// publicRouter.use('/subscription',apiLimiter, subscriptionRoutes);
// publicRouter.use('/purchase',apiLimiter, purchaseRoutes);
// publicRouter.use('/category',apiLimiter, categoryRoutes);
publicRouter.use("/auth", middleware_1.apiLimiter, authentication_1.default);
// Endpoint for connection testing
publicRouter.route("/").get((req, res) => {
    res.send("Blank!");
});
//# sourceMappingURL=routes.js.map