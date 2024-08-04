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
exports.AnswersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const questions_model_1 = require("../questions/questions.model");
const answers_model_1 = require("./answers.model");
let AnswersService = class AnswersService {
    constructor(questionsModel, answersModel) {
        this.questionsModel = questionsModel;
        this.answersModel = answersModel;
    }
    findOne(filter) {
        return this.answersModel.findOne({ ...filter });
    }
    findAll() {
        return this.answersModel.findAll();
    }
    async findAllAQ(id) {
        const answers = this.answersModel.findAll({ where: { id_q: id }, include: [this.questionsModel] });
        return answers;
    }
    async findOneAnswer(id) {
        const answer = await this.answersModel.findOne({ where: { id: id } });
        if (answer) {
            return answer;
        }
        return {
            warningMessage: 'Ответ с таким id не найден'
        };
    }
    async create(answerDto) {
        const answer = new answers_model_1.Answers();
        const existingQuestion = await this.questionsModel.findOne({
            where: { id: answerDto.id_q }
        });
        if (!existingQuestion) {
            return {
                warningMessage: 'Такой пользователь не существует'
            };
        }
        answer.answer = answerDto.answer;
        answer.answer_bool = answerDto.answer_bool;
        answer.id_q = answerDto.id_q;
        return answer.save();
    }
    async deleteAnswer(id) {
        let answer = await this.answersModel.findOne({ where: { id: id } });
        if (!answer) {
            return "Такой ответ не найден";
        }
        answer.destroy();
        let answer2 = await this.answersModel.findOne({ where: { id: id } });
        return answer2;
    }
};
exports.AnswersService = AnswersService;
exports.AnswersService = AnswersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(questions_model_1.Questions)),
    __param(1, (0, sequelize_1.InjectModel)(answers_model_1.Answers)),
    __metadata("design:paramtypes", [Object, Object])
], AnswersService);
//# sourceMappingURL=answers.service.js.map