import {Sequelize} from "sequelize-typescript";
import {Series} from "./series";
import {Product} from "./product";
import {User} from "./user";
import {Subscription} from "./subscriptions";
import {Order} from "./order";
import {Purchase} from "./purchases";
import {Category} from "./categories";
import {config} from "../config/config";
import {Role} from "./role";

const sequelize = new Sequelize({
  database: config.apiDb.database,
  host: config.apiDb.options.host,
  dialect: "mysql",
  username: config.apiDb.user,
  password: config.apiDb.password,
  models: [User, Product, Series, Subscription, Order, Purchase, Role, Category],
});

const db = {
  sequelize,
};

export {
  Series,
  Product,
  User,
  Subscription,
  Order,
  Purchase,
  Role,
  Category,
  db,
};
