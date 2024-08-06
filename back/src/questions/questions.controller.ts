
import { QuestionsDTO } from './dto/questions.dto';
import { QuestionsService } from './questions.service';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, Request, UploadedFile, Delete, Patch } from '@nestjs/common';

@Controller('questions')
export class QuestionsController {

    constructor(private questionsService:QuestionsService){}

    @Get('/get-all')
    getAll(){
        return this.questionsService.findAll();
    }

    @Get('/get-one/:id')
    getQuestion(@Param('id') id:number){
        return this.questionsService.findOneQuestion(id)
    }

    @Post('/create')
    create(@Body()questionsDTO: QuestionsDTO){
        return this.questionsService.create(questionsDTO)
    }

    @Patch('/change/:id')
    changeQuestions(@Param('id') id:number, @Body() question:string){
        return this.questionsService.changeQuestion(id, question)
    }

    @Get('/question-user/:id')
    getQU(@Param('id') id:number){
        return this.questionsService.getQU(id)
    }

}
