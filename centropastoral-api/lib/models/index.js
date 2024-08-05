"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.Favorites = exports.Category = exports.Role = exports.Purchase = exports.Order = exports.Subscription = exports.User = exports.Product = exports.Series = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const series_1 = require("./series");
Object.defineProperty(exports, "Series", { enumerable: true, get: function () { return series_1.Series; } });
const product_1 = require("./product");
Object.defineProperty(exports, "Product", { enumerable: true, get: function () { return product_1.Product; } });
const user_1 = require("./user");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
const subscriptions_1 = require("./subscriptions");
Object.defineProperty(exports, "Subscription", { enumerable: true, get: function () { return subscriptions_1.Subscription; } });
const order_1 = require("./order");
Object.defineProperty(exports, "Order", { enumerable: true, get: function () { return order_1.Order; } });
const purchases_1 = require("./purchases");
Object.defineProperty(exports, "Purchase", { enumerable: true, get: function () { return purchases_1.Purchase; } });
const categories_1 = require("./categories");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return categories_1.Category; } });
const config_1 = require("../config/config");
const role_1 = require("./role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return role_1.Role; } });
const favorites_1 = require("./favorites");
Object.defineProperty(exports, "Favorites", { enumerable: true, get: function () { return favorites_1.Favorites; } });
const sequelize = new sequelize_typescript_1.Sequelize({
    database: config_1.config.apiDb.database,
    host: config_1.config.apiDb.options.host,
    dialect: "mysql",
    username: config_1.config.apiDb.user,
    password: config_1.config.apiDb.password,
    models: [user_1.User, product_1.Product, series_1.Series, subscriptions_1.Subscription, order_1.Order, purchases_1.Purchase, role_1.Role, categories_1.Category, favorites_1.Favorites],
});
const db = {
    sequelize,
};
exports.db = db;
//# sourceMappingURL=index.js.map