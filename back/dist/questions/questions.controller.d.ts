import { QuestionsDTO } from './dto/questions.dto';
import { QuestionsService } from './questions.service';
export declare class QuestionsController {
    private questionsService;
    constructor(questionsService: QuestionsService);
    getAll(): Promise<import("./questions.model").Questions[]>;
    getQuestion(id: number): Promise<import("./questions.model").Questions | {
        warningMessage: string;
    }>;
    create(questionsDTO: QuestionsDTO): Promise<import("./questions.model").Questions | {
        warningMessage: string;
    }>;
    changeQuestions(id: number, question: string): Promise<string | import("./questions.model").Questions>;
    getQU(id: number): Promise<import("./questions.model").Questions[] | {
        warningMessage: string;
    }>;
}
