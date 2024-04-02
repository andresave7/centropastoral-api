//import logger from "../utils/logger";

import {Request, Response, NextFunction} from "express";
// import {Exception} from "handlebars";
// import {User as model} from "../models";
import * as admin from "firebase-admin";
import userController from "../controller/user";
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
  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.status(401).send("Invalid Credentials");
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
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
  public async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    next();
  }

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dbresponse = await admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        disabled: false,
      });

      if (dbresponse.uid) {
        userController.create(req, res, next);
      } else {
        next();
      }
      res.status(500).send("Error creating user");
    } catch (error ) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }
}

export default new AuthenticationController();
