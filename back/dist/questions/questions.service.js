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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const questions_model_1 = require("./questions.model");
const users_model_1 = require("../users/users.model");
let QuestionsService = class QuestionsService {
    constructor(questionsModel, usersModel) {
        this.questionsModel = questionsModel;
        this.usersModel = usersModel;
    }
    findOne(filter) {
        return this.questionsModel.findOne({ ...filter });
    }
    findAll() {
        return this.questionsModel.findAll();
    }
    async getQU(id) {
        const q = this.questionsModel.findAll({ where: { id_u: id } });
        if ((await q).length == 0) {
            return {
                warningMessage: "У этого пользователя пока нет вопросов"
            };
        }
        return q;
    }
    async findOneQuestion(id) {
        const question = await this.questionsModel.findOne({ where: { id: id } });
        return question;
    }
    async create(questionDto) {
        const question = new questions_model_1.Questions();
        const existingUser = await this.usersModel.findOne({
            where: { id: questionDto.id_u }
        });
        if (!existingUser) {
            return {
                warningMessage: 'Такой пользователь не существует'
            };
        }
        const existingQuesrionByQuestion = await this.findOne({
            where: { question: questionDto.question }
        });
        if (existingQuesrionByQuestion) {
            return {
                warningMessage: 'Такой вопрос уже существует!'
            };
        }
        question.question = questionDto.question;
        question.id_u = questionDto.id_u;
        question.user = existingUser;
        return question.save();
    }
    async changeQuestion(id, question) {
        let question1 = await this.questionsModel.findOne({ where: { id: id } });
        if (!question1) {
            return "Такой вопрос не найден";
        }
        console.log(question);
        await this.questionsModel.update({ question: question[0] }, { where: { id: id } });
        const answer = this.questionsModel.findOne({ where: { id: id } });
        return answer;
    }
};
exports.QuestionsService = QuestionsService;
exports.QuestionsService = QuestionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(questions_model_1.Questions)),
    __param(1, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, Object])
], QuestionsService);
//# sourceMappingURL=questions.service.js.map