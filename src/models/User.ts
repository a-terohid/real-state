import { ROLE } from '@/types/enum';
import { User } from '@/types/types';
import { Schema, SchemaTypeOptions, model, models } from "mongoose";

const UserSchema = new Schema<User , Schema.Types.ObjectId>({
    name : {
        type: String,
    },
    lastName : {
        type: String,
    },
    email : {
        type: String,
        required : true,
    },
    password : {
        type : String,
        required: true,
    },
    number : {
        type: String
    },
    dateAdded : {},
    role : {
        type : String,
        required: true,
        default : ROLE.USER
    },
    numberOfAds : {
        type: Number
    }
} , { collection : "real-state-user" })


const User = models.User || model("User", UserSchema);

export default User;