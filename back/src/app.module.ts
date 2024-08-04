import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';

import { SequelizeModule } from "@nestjs/sequelize";
import { QuestionsController } from './questions/questions.controller';
import { QuestionsModule } from './questions/questions.module';
import { AnswersController } from './answers/answers.controller';
import { AnswersModule } from './answers/answers.module';

@Module({
  controllers: [QuestionsController, AnswersController],
  providers: [],
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: `.${process.env.NODE_ENV}.env`
    // }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345qwert',
        database: 'vadim',
        models: [User],
       autoLoadModels: true,
      
     // synchronize:true,
      
      
      }),
    UsersModule,
    QuestionsModule,
    AnswersModule,
    
  ],
})
export class AppModule {}