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
exports.AnswersController = void 0;
const common_1 = require("@nestjs/common");
const answers_service_1 = require("./answers.service");
const answers_dto_1 = require("./dto/answers.dto");
let AnswersController = class AnswersController {
    constructor(answersService) {
        this.answersService = answersService;
    }
    getAll() {
        return this.answersService.findAll();
    }
    getAnswers(id) {
        return this.answersService.findOneAnswer(id);
    }
    getQuestion(id) {
        return this.answersService.findAllAQ(id);
    }
    create(answersDTO) {
        return this.answersService.create(answersDTO);
    }
    changeQuestions(id) {
        return this.answersService.deleteAnswer(id);
    }
};
exports.AnswersController = AnswersController;
__decorate([
    (0, common_1.Get)('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnswersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/get-one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnswersController.prototype, "getAnswers", null);
__decorate([
    (0, common_1.Get)('/get-qa/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnswersController.prototype, "getQuestion", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answers_dto_1.AnswersDTO]),
    __metadata("design:returntype", void 0)
], AnswersController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnswersController.prototype, "changeQuestions", null);
exports.AnswersController = AnswersController = __decorate([
    (0, common_1.Controller)('answers'),
    __metadata("design:paramtypes", [answers_service_1.AnswersService])
], AnswersController);
//# sourceMappingURL=answers.controller.js.map