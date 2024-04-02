"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
// models/Series.ts
const sequelize_typescript_1 = require("sequelize-typescript");
const _1 = require("./");
let Series = class Series extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.STRING
    })
], Series.prototype, "seriesId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Series.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT)
], Series.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => _1.Category),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING)
], Series.prototype, "categoryId", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE
    })
], Series.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE
    })
], Series.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => _1.Category)
], Series.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => _1.Product)
], Series.prototype, "products", void 0);
Series = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "Series"
    })
], Series);
exports.Series = Series;
//# sourceMappingURL=series.js.map