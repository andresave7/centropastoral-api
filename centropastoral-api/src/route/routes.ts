import productRoutes from "./product";
import seriesRoutes from "./series";
import userRoutes from "./user";
import authenticationRoutes from "./authentication";
import orderRoutes from "./order";
import subscriptionRoutes from "./subscriptions";
import purchaseRoutes from "./purchases";
import categoryRoutes from "./categories";
import favoriteRoutes from "./favoriates";
// import cartRoutes from "./cart";


import * as express from "express";

import {apiLimiter, verifyTokenAndAuthorizeAdmin} from "../middleware/middleware";

const router: express.Router = express.Router();

router.use("/product", apiLimiter, productRoutes);
router.use("/serie", apiLimiter, verifyTokenAndAuthorizeAdmin, seriesRoutes);
router.use("/user", apiLimiter, verifyTokenAndAuthorizeAdmin, userRoutes);
router.use("/order", apiLimiter, verifyTokenAndAuthorizeAdmin, orderRoutes);
router.use("/subscriptions", apiLimiter, verifyTokenAndAuthorizeAdmin, subscriptionRoutes);
router.use("/purchases", apiLimiter, verifyTokenAndAuthorizeAdmin, purchaseRoutes);
router.use("/category", apiLimiter, verifyTokenAndAuthorizeAdmin, categoryRoutes);
router.use("/favorites", apiLimiter, verifyTokenAndAuthorizeAdmin, favoriteRoutes);//change
// router.use("/cart", apiLimiter, verifyTokenAndAuthorizeAdmin, cartRoutes); //change


// router.use("/favorites", apiLimiter, favoriteRoutes);//change

router.use("/auth", apiLimiter, authenticationRoutes);

// Endpoint for connection testing
router.route("/").get((req, res) => {
  res.send("Blank!");
});

export {router};
