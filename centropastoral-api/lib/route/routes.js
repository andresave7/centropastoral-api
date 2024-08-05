"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const product_1 = require("./product");
const series_1 = require("./series");
const user_1 = require("./user");
const authentication_1 = require("./authentication");
const order_1 = require("./order");
const subscriptions_1 = require("./subscriptions");
const purchases_1 = require("./purchases");
const categories_1 = require("./categories");
const favorites_1 = require("./favorites");
// import cartRoutes from "./cart";
const express = require("express");
const middleware_1 = require("../middleware/middleware");
const router = express.Router();
exports.router = router;
// router.use("/product", apiLimiter, productRoutes);
// router.use("/serie", apiLimiter, verifyTokenAndAuthorizeAdmin, seriesRoutes);
// router.use("/user", apiLimiter, verifyTokenAndAuthorizeAdmin, userRoutes);
// router.use("/order", apiLimiter, verifyTokenAndAuthorizeAdmin, orderRoutes);
router.use("/subscriptions", middleware_1.apiLimiter, middleware_1.verifyTokenAndAuthorizeAdmin, subscriptions_1.default);
// router.use("/purchases", apiLimiter, verifyTokenAndAuthorizeAdmin, purchaseRoutes);
// router.use("/category", apiLimiter, verifyTokenAndAuthorizeAdmin, categoryRoutes);
// router.use("/favorites", apiLimiter, verifyTokenAndAuthorizeAdmin, favoriteRoutes);//change
// router.use("/cart", apiLimiter, verifyTokenAndAuthorizeAdmin, cartRoutes); //change
router.use("/product", product_1.default);
router.use("/serie", series_1.default);
router.use("/user", user_1.default);
router.use("/order", order_1.default);
router.use("/subscriptions", subscriptions_1.default);
router.use("/purchases", purchases_1.default);
router.use("/category", categories_1.default);
router.use("/favorites", favorites_1.default);
// router.use("/cart", cartRoutes); //change
router.use("/auth", middleware_1.apiLimiter, authentication_1.default);
// Endpoint for connection testing
router.route("/").get((req, res) => {
    res.send("Blank!");
});
//# sourceMappingURL=routes.js.map