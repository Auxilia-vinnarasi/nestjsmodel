

import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
// import { ProductDTO } from './dto/product.dto';
// import { Product } from './interface/product.interface';
// import { ProductService } from './product.service';
import { UserDTO } from './dto/user.dto';
import {User} from "./interface/user.interface";
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService ) {}
    @Get()
    async userget():Promise<User[]>{
       return await this.userService.userget();
    }
    @Get(':id')
    async useroneget(@Param("id") id : string):Promise<User>{
       return await this.userService.useroneget(id);
    }
    @Put(':id')
    async userupdate(@Param("id") id : string, @Body() data : UserDTO):Promise<User>{
       return await this.userService.userupdate(id , data);
    }
    @Post()
    async userpost(@Body() data : UserDTO): Promise<User>{
        return await this.userService.userpost(data)
    }
}
