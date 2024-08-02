import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';

import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [],
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
    
  ],
})
export class AppModule {}