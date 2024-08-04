import { Model } from "sequelize-typescript";
import { Questions } from "src/questions/questions.model";
export declare class Answers extends Model {
    id: number;
    answer: string;
    answer_bool: boolean;
    id_q: number;
    question: Questions;
}
