import { Questions } from 'src/questions/questions.model';
import { Answers } from './answers.model';
import { AnswersDTO } from './dto/answers.dto';
export declare class AnswersService {
    private questionsModel;
    private answersModel;
    constructor(questionsModel: typeof Questions, answersModel: typeof Answers);
    findOne(filter: {
        where: {
            id?: number | string;
            answer?: string;
        };
    }): Promise<Answers>;
    findAll(): Promise<Answers[]>;
    findAllAQ(id: number): Promise<Answers[] | {
        warningMessage: string;
    }>;
    findOneAnswer(id: number): Promise<Answers | {
        warningMessage: string;
    }>;
    create(answerDto: AnswersDTO): Promise<Answers | {
        warningMessage: string;
    }>;
    deleteAnswer(id: number): Promise<Answers | string>;
}
