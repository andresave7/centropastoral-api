import * as express from "express";
import helmet from "helmet";
// import dotenv from "dotenv";
import {publicRouter} from "./route/routes";
import * as admin from "firebase-admin";
import {config} from "./config/config";
import * as functions from "firebase-functions";
import * as cors from "cors";

// dotenv.config();

const app = express();

const serviceAccount = config.firebaseConfig;

app.use(cors({ origin: true }));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Provide a default port if none is specified in .env

// app.use(middleware.checkErrors);

app.use("/v1/", publicRouter);

app.get("/", (req, res) => {
  res.send("Centro Pastoral API");
});

// // Simplified server startup logic
// app.listen(port, () => {
//   console.log(`App (${process.env.NODE_ENV}) 
//   listening on port: ${port}`);
// });


exports.api = functions.https.onRequest(app);
