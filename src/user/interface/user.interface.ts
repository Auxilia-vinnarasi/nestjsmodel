import {Document} from 'mongoose';
export interface User extends Document{
    readonly name: String;
    readonly email: String;
    readonly password: String;
}