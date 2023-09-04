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
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}

export async function PATCH( req : Request ) {

    try{

        await connectDB()

        const { 
            _id,
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


            const advertisement = await Advertisement.findOne({ _id })

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


                advertisement.Title = title,
                advertisement.Description= description,
                advertisement.Cost= +cost,
                advertisement.Category= category,
                advertisement.Address= address ,
                advertisement.Phone= phone,
                advertisement.RealState= realState,
                advertisement.Amenities= amenities ,
                advertisement.Rules= rules,
                advertisement.ConstructionDate = constructionDate
                advertisement.save()

                return NextResponse.json(
                    { message: MESSAGE.AD_EDITE },
                    { status: 200 }
                );


    }  catch ( err ) {
        return NextResponse.json(
            { error : ERROR.SERVER_ERROR },
            { status : 500 }
        )
    }

}