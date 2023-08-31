import { ERROR, MESSAGE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import User from "@/models/User";
import Advertisement from "@/models/Advertisements";
import { Types } from "mongoose";

export async function POST( req : Request ){

    try{

        await connectDB()

        const { 
            title,
            description,
            cost,
            category,
            address ,
            phone,
            realState,
            amenities ,
            rules,
            constructionDate,
        } = await req.json()

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

        if( !title ||
            !description ||
            !cost ||
            !category ||
            !address  ||
            !phone ||
            !realState ||
            !constructionDate )
            {
                return NextResponse.json(
                    { error: ERROR.INVALID_DATA },
                    { status : 422 }
                )
            }

            
            const newAdvertisement = await Advertisement.create({
                Title : title,
                Description: description,
                Cost: +cost,
                Category: category,
                Address: address ,
                Phone: phone,
                RealState: realState,
                Amenities: amenities ,
                Rules: rules,
                UserId : new Types.ObjectId(user._id),
                ConstructionDate : constructionDate
            })
            
            user.numberOfAds = user.numberOfAds + 1
            user.save()

            console.log( newAdvertisement );

            return NextResponse.json(
                { message: MESSAGE.NEW_ADVERTISEMENT },
                { status: 201 }
            );
            

    } catch( err ){
        console.log(err);
        
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}