import { ERROR, MESSAGE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";

export async function PATCH( req : Request ) {

    try{

        await connectDB()

        const { name , lastName , email , number , personalID } = await req.json()

        const session = await getServerSession( authOptions )
        if ( !session ) {
            return NextResponse.json(
                { error: ERROR.LOGIN },
                { status: 401 }
            );
        }

        const user  = await User.findOne({ email : session.user.email })
        if( !user ) {
            return NextResponse.json(
                { error: ERROR.CANT_FIND_USER },
                { status: 404 }
            );
        }


        if( !email  ) {
            return NextResponse.json(
                { error: ERROR.INVALID_DATA },
                { status : 422 }
            )
        }

        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.number = number ;
        user.personalID = personalID;
        user.save()

        return NextResponse.json(
            { message: MESSAGE.USER_EDITE },
            { status: 200 }
        );

    } catch ( err ){
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}