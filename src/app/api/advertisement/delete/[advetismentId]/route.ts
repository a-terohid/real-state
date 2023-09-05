import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Advertisement from "@/models/Advertisements";
import User from "@/models/User";
import { ERROR, MESSAGE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE( req : Request, context ) {

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


            if( !user._id.equals(advertisement.UserId) ) {
                return NextResponse.json(
                    { error: ERROR.AD_ACCESS },
                    { status: 403 }
                );
            }

            await advertisement.deleteOne({ _id: id });

            user.numberOfAds = user.numberOfAds - 1
            user.save()

            return NextResponse.json(
                { message: MESSAGE.AD_EDITE },
                { status: 200 }
              );

    } catch( e ) {
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}