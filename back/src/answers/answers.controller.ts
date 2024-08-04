
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, Request, UploadedFile, Delete, Patch } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersDTO } from './dto/answers.dto';

@Controller('answers')
export class AnswersController {

    constructor(private answersService:AnswersService){}

    @Get('/get-all')
    getAll(){
        return this.answersService.findAll();
    }

    @Get('/get-one/:id')
    getAnswers(@Param('id') id:number){
        return this.answersService.findOneAnswer(id);
    }
    @Get('/get-qa/:id')
    getQuestion(@Param('id') id:number){
        return this.answersService.findAllAQ(id)
    }

    @Post('/create')
    create(@Body()answersDTO: AnswersDTO){
        return this.answersService.create(answersDTO)
    }

    @Delete('/delete/:id')
    changeQuestions(@Param('id') id:number){
        return this.answersService.deleteAnswer(id);
    }


}
