import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Header, HttpCode, HttpStatus, Body, Post, Get, Param, UseInterceptors, UploadedFiles, UploadedFile, Delete, HttpException } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-baskets.dto';


@Controller('baskets')
export class BasketsController {

    constructor(private readonly basketService: BasketsService){}


    @Post('/create-basket')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-type', 'application/json')
    async createBasket(@Body() createBasketDto :CreateBasketDto){
        try{
            const data = await this.basketService.create(createBasketDto);
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

   
    @Delete('/delete/:id')
    async removeOne(@Param('id') id:number){
        try{
            const data = await this.basketService.remove(id);
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
   
    @Get(`/getall-basket`)
    async getAllBaskets() {
        try{
            const data = await this.basketService.findAll()
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

    @Get('/basket-user/:id')
   async  getBasketUser(@Param('id') id:number){
        try{
            const data = await this.basketService.getBasketUser(id);
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
    @Post('/buybasket/:id')
    async buyBasket(@Param('id') id:number){
        try{
            const data = await this.basketService.buyGoods(id);
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