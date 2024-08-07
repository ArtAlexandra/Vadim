
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, Request, UploadedFile, Delete, HttpException } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path = require('path');
import { LogInShopDto } from './dto/login-shop.dto';

export const storage = {
    // './uploads/profileimages'
    storage: diskStorage({
        destination: '../front/public/image/shops',
        filename: (req, file, cb) => {
            console.log(file)
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '');// + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}


@Controller('shops')
export class ShopsController {
    constructor(private shopsService: ShopsService){}

   
    @Post('/create')
    @UseInterceptors(FileInterceptor('file', storage))
    async create(@Body() shopDto :CreateShopDto,@UploadedFile() file:Express.Multer.File){
        console.log(shopDto, file)
        try{
            const data =await this.shopsService.create(shopDto, file.originalname);
            return data
        }
        catch(error){
            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warning: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
         
    }

    @Get('/get-all')
    getAll(){
        return this.shopsService.findAll();
    }
    @Get('/get-shop/:id')
    async getShop(@Param('id') id:number){
        try{
            const data = await this.shopsService.getShop(id);
            return data
        }
        catch(error){
            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
         
    }


    @Get('/get-shops/:city')
   async  getShops(@Param('city') city:string){
        try{
            const data = await this.shopsService.getShopsCity(city);
            return data
        }
        catch(error){
            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
         
    }

    @Post('/shop-login')
    async login(@Body() loginShopDto:LogInShopDto){
        try{
            const data = await this.shopsService.login(loginShopDto);
            return data
        }
        catch(error){
            
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                warningMessage: error.message,
              }, HttpStatus.FORBIDDEN, {
                cause: error
              });
        }
        
    }
}
