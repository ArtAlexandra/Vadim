import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Questions } from 'src/questions/questions.model';
import { Answers } from './answers.model';
import { AnswersDTO } from './dto/answers.dto';




@Injectable()
export class AnswersService {
    constructor(
        @InjectModel(Questions)
        private questionsModel : typeof Questions,
        @InjectModel(Answers)
        private answersModel: typeof Answers
      ){}

      findOne(filter: {
        where: { id?: number|string; answer?: string; };
      }): Promise<Answers> {
        return this.answersModel.findOne({ ...filter });
      }
    
      findAll(): Promise<Answers[]> {
        return  this.answersModel.findAll();
      }

      async findAllAQ(id:number):Promise<Answers[]|{warningMessage:string}>{
        const answers = this.answersModel.findAll({where:{id_q:id}, include:[this.questionsModel]})
        return answers 
      }
      async findOneAnswer(id:number):Promise<Answers|{warningMessage:string}>{
        const answer = await this.answersModel.findOne({where:{id:id}})
        if(answer){
            return answer
        }
        return {
            warningMessage:'Ответ с таким id не найден'
        }
      }
      async create(
        answerDto: AnswersDTO
    ): Promise<Answers| {warningMessage:string}>{
        const answer = new Answers();
      
        const existingQuestion = await this.questionsModel.findOne({
            where: { id: answerDto.id_q}
        });
        
        if(!existingQuestion){
            return {
                warningMessage : 'Такой пользователь не существует'
            };
        }

      
     
    
        
      answer.answer = answerDto.answer;
      answer.answer_bool= answerDto.answer_bool;
      answer.id_q = answerDto.id_q;
        return answer.save(); 

    }

   

  
    
    async deleteAnswer(id:number):Promise<Answers|string>{
        let answer = await this.answersModel.findOne({where:{id:id}});
       
        if(!answer){
            return "Такой ответ не найден";
        }
        answer.destroy();
        let answer2 = await this.answersModel.findOne({where:{id:id}});
        return answer2;
    }

  

}