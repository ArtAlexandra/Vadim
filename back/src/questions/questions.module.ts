import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { QuestionsController } from './questions.controller';
import { Questions } from './questions.model';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [
    SequelizeModule.forFeature([Questions]),

    SequelizeModule.forFeature([User]),
   
  ],
  
  exports:[QuestionsService]
})
export class QuestionsModule {}
