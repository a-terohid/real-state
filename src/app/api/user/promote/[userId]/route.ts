import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import { ERROR, MESSAGE, ROLE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH( req : Request , context ) {

    try { 

        await connectDB()

        const id = context.params.userId


        const session = await getServerSession( authOptions )
        if ( !session ) {
            return NextResponse.json(
                { error: ERROR.LOGIN },
                { status: 401 }
            );
        }

        const owner = await User.findOne({ email : session.user.email })
        if( !owner ) {
            return NextResponse.json(
                { error: ERROR.CANT_FIND_USER },
                { status: 404 }
            );
        }

        if( owner.role != ROLE.OWNER ) {
            return NextResponse.json(
                { error: ERROR.ACCESS_DENIED },
                { status: 403 }
            );
        }


        const user = await User.findOne({ _id : id })
        if( !user ) {
            return NextResponse.json(
                { error: ERROR.CANT_FIND_USER },
                { status: 404 }
            );
        }

        user.role = ROLE.ADMIN
        user.save()

        return NextResponse.json(
            { message: MESSAGE.PROMOT },
            { status: 200 }
        );


    } catch ( err ) {
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}