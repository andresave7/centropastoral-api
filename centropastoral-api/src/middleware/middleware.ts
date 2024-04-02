import rateLimit from "express-rate-limit";
import * as admin from "firebase-admin";
import {Request, Response, NextFunction} from "express";
//import {User} from "../models/user";

const verifyTokenAndAuthorizeAdmin = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    return res.status(403).send("Unauthorized");
  }
};


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

export {
  apiLimiter,
  verifyTokenAndAuthorizeAdmin,
};
