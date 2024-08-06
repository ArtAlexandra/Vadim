import { All, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Questions } from './questions.model';
import { QuestionsDTO } from './dto/questions.dto';
import { User } from 'src/users/users.model';



@Injectable()
export class QuestionsService {
    constructor(
        @InjectModel(Questions)
        private questionsModel : typeof Questions,
        @InjectModel(User)
        private usersModel: typeof User
      ){}

      findOne(filter: {
        where: { id?: number|string; question?: string; };
      }): Promise<Questions> {
        return this.questionsModel.findOne({ ...filter });
      }
    
      findAll(): Promise<Questions[]> {
        return  this.questionsModel.findAll();
      }
      async getQU(id:number):Promise<Questions[]|{warningMessage:string}>{
        const q =   this.questionsModel.findAll({where:{id_u:id}})
        
        if((await q).length==0){
            return{
                warningMessage:"У этого пользователя пока нет вопросов"
            }
        }
        return q
      }

      async findOneQuestion(id:number):Promise<Questions|{warningMessage:string}>{
        const question = await this.questionsModel.findOne({where:{id:id}})
        // if(!question){
        //     return{
        //         warningMessage:"Вопрос с таким id не найден"
        //     }
        // }
        return question
      }
      async create(
        questionDto: QuestionsDTO
    ): Promise<Questions| {warningMessage:string}>{
        const question = new Questions();
      
        const existingUser = await this.usersModel.findOne({
            where: { id: questionDto.id_u}
        });
        
        if(!existingUser){
            return {
                warningMessage : 'Такой пользователь не существует'
            };
        }

        const existingQuesrionByQuestion = await this.findOne({
            where: { question: questionDto.question}
        });
        
        if(existingQuesrionByQuestion){
            return {
                warningMessage : 'Такой вопрос уже существует!'
            };
        }
     
    
        
        question.question = questionDto.question;
        question.id_u = questionDto.id_u;
        question.user = existingUser;

        return question.save(); 

    }

   

  
    
    async changeQuestion(id:number, question:string):Promise<Questions|string>{
        let question1 = await this.questionsModel.findOne({where:{id:id}});
       
        if(!question1){
            return "Такой вопрос не найден";
        }
        console.log(question)
        await this.questionsModel.update({question:question[0]}, {where:{id:id}})
        const answer = this.questionsModel.findOne({where:{id:id}})
        return answer;
    }

  

}