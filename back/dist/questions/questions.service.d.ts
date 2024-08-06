import { Questions } from './questions.model';
import { QuestionsDTO } from './dto/questions.dto';
import { User } from 'src/users/users.model';
export declare class QuestionsService {
    private questionsModel;
    private usersModel;
    constructor(questionsModel: typeof Questions, usersModel: typeof User);
    findOne(filter: {
        where: {
            id?: number | string;
            question?: string;
        };
    }): Promise<Questions>;
    findAll(): Promise<Questions[]>;
    getQU(id: number): Promise<Questions[] | {
        warningMessage: string;
    }>;
    findOneQuestion(id: number): Promise<Questions | {
        warningMessage: string;
    }>;
    create(questionDto: QuestionsDTO): Promise<Questions | {
        warningMessage: string;
    }>;
    changeQuestion(id: number, question: string): Promise<Questions | string>;
}
