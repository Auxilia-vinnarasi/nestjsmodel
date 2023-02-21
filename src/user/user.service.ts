
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { ProductDTO } from './dto/product.dto';
// import { Product } from './interface/product.interface';
// import bcrypt from 'bcrypt';
import { User } from './interface/user.interface';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel("user") private userModel: Model<User>) {}
    async userget(): Promise<User[]>{
        return await this.userModel.find().exec();
    }
    async useroneget(id: string): Promise<User>{
        return await this.userModel.findById(id).exec();
    }
    async userupdate(id: string,data : UserDTO): Promise<User>{
        return await this.userModel.findOneAndUpdate({_id:id} ,data ,{new: true}).exec();
    }
    async userpost(data : UserDTO): Promise<User>{
        const product = new this.userModel(data);
        return await product.save();
    }
}