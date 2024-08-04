"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answers = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const questions_model_1 = require("../questions/questions.model");
let Answers = class Answers extends sequelize_typescript_1.Model {
};
exports.Answers = Answers;
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], Answers.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    __metadata("design:type", String)
], Answers.prototype, "answer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: false }),
    __metadata("design:type", Boolean)
], Answers.prototype, "answer_bool", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => questions_model_1.Questions),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], Answers.prototype, "id_q", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => questions_model_1.Questions),
    __metadata("design:type", questions_model_1.Questions)
], Answers.prototype, "question", void 0);
exports.Answers = Answers = __decorate([
    sequelize_typescript_1.Table
], Answers);
;
//# sourceMappingURL=answers.model.js.map