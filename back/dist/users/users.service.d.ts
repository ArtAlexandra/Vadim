import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/users.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: typeof User);
    findOne(filter: {
        where: {
            id?: number | string;
            username?: string;
            email?: string;
            phone?: string;
        };
    }): Promise<User>;
    findAll(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User | {
        warningMessage: string;
    }>;
    getUser(id: number): Promise<CreateUserDto | string>;
    login(userDto: UserDto): Promise<User | {
        warningMessage: string;
    }>;
}
