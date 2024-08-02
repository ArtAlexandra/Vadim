
import { Body, Controller, Get, Post, UseGuards, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

   
    @Post('/signin')
    create(@Body() userDto: CreateUserDto){
        return this.usersService.create(userDto);
    }

   
    @Get('/get-all')
    getAll(){
        return this.usersService.findAll();
    }
    @Get('/get-user/:id')
    getUser(@Param('id') id:number){
        return this.usersService.getUser(id);
    }

    @Post('/login')
    Login(@Body() userDto: UserDto){
        console.log(userDto)
        return this.usersService.login(userDto)
    }
}