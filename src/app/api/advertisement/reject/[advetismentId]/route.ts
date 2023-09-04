import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Advertisement from "@/models/Advertisements";
import User from "@/models/User";
import { ERROR, MESSAGE, ROLE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH( req : Request , context ) {

    try{

        await connectDB()

        const id = context.params.advetismentId

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

        const advertisement = await Advertisement.findOne({ _id : id })

            if( !advertisement ){
                return NextResponse.json(
                    { error: ERROR.CANT_FIND_ADVERTISMEnT },
                    { status: 404 }
                );
            }


            if( user.role == ROLE.USER ) {
                return NextResponse.json(
                    { error: ERROR.ACCESS_DENIED },
                    { status: 403 }
                );
            }


            advertisement.Published = false
            advertisement.Rejected = true
            advertisement.RejectNUM = 1

            advertisement.save()

            return NextResponse.json(
                { message: MESSAGE.AD_REJECT },
                { status: 200 }
            );


    } catch( e ) {
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}