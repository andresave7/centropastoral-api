"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
// models/Purchase.ts
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("./user");
const order_1 = require("./order");
let Purchase = class Purchase extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], Purchase.prototype, "purchaseId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Purchase.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => order_1.Order),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Purchase.prototype, "orderId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Purchase.prototype, "paymentToken", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE)
], Purchase.prototype, "purchaseDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW })
], Purchase.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.DATE, defaultValue: sequelize_typescript_1.DataType.NOW })
], Purchase.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.User)
], Purchase.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => order_1.Order)
], Purchase.prototype, "order", void 0);
Purchase = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Purchase"
    })
], Purchase);
exports.Purchase = Purchase;
//# sourceMappingURL=purchases.js.map