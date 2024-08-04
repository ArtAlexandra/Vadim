import { AnswersService } from './answers.service';
import { AnswersDTO } from './dto/answers.dto';
export declare class AnswersController {
    private answersService;
    constructor(answersService: AnswersService);
    getAll(): Promise<import("./answers.model").Answers[]>;
    getAnswers(id: number): Promise<import("./answers.model").Answers | {
        warningMessage: string;
    }>;
    getQuestion(id: number): Promise<import("./answers.model").Answers[] | {
        warningMessage: string;
    }>;
    create(answersDTO: AnswersDTO): Promise<import("./answers.model").Answers | {
        warningMessage: string;
    }>;
    changeQuestions(id: number): Promise<string | import("./answers.model").Answers>;
}
