import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { Answers } from './answers.model';
import { Questions } from 'src/questions/questions.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [
    SequelizeModule.forFeature([Answers]),

    SequelizeModule.forFeature([Questions]),
   
  ],
  
  exports:[AnswersService]
})
export class AnswersModule {}
