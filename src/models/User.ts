import { ROLE } from '@/types/enum';
import { User } from '@/types/types';
import { Schema, SchemaTypeOptions, model, models } from "mongoose";

const UserSchema = new Schema<User , Schema.Types.ObjectId>({
    name : {
        type: String,
        default : ""
    },
    lastName : {
        type: String,
        default : ""
    },
    email : {
        type: String,
        required : true,
        default : ""
    },
    password : {
        type : String,
        required: true,
        default : ""
    },
    number : {
        type: String,
        default : ""
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
      },
    role : {
        type : String,
        required: true,
        default : ROLE.USER
    },
    numberOfAds : {
        type: Number,
        default : 0
    },
    personalID : {
        type: String,
        default : ""
    }
    
} , { collection : "real-state-user" })


const User = models.User || model("User", UserSchema);

export default User;