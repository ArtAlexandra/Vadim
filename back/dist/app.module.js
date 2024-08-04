"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const users_model_1 = require("./users/users.model");
const sequelize_1 = require("@nestjs/sequelize");
const questions_controller_1 = require("./questions/questions.controller");
const questions_module_1 = require("./questions/questions.module");
const answers_controller_1 = require("./answers/answers.controller");
const answers_module_1 = require("./answers/answers.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [questions_controller_1.QuestionsController, answers_controller_1.AnswersController],
        providers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345qwert',
                database: 'vadim',
                models: [users_model_1.User],
                autoLoadModels: true,
            }),
            users_module_1.UsersModule,
            questions_module_1.QuestionsModule,
            answers_module_1.AnswersModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map