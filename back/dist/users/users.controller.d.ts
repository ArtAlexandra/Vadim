import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.model").User | {
        warningMessage: string;
    }>;
    getAll(): Promise<import("./users.model").User[]>;
    getUser(id: number): Promise<string | CreateUserDto>;
    Login(userDto: UserDto): Promise<import("./users.model").User | {
        warningMessage: string;
    }>;
}
