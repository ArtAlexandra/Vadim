import { Model } from "sequelize-typescript";
import { User } from "src/users/users.model";
export declare class Questions extends Model {
    id: number;
    question: string;
    id_u: number;
    user: User;
}
