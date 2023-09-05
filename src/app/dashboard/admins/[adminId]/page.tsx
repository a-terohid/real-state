import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Advertisement from '@/models/Advertisements';
import User from '@/models/User';
import UserDetailPage from '@/template/UserDetailPage';
import { ERROR } from '@/types/enum';
import connectDB from '@/utils/connectDB';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async ({ params: { adminId } }) => {

    await connectDB();
    const session = await getServerSession( authOptions )
    const user = await User.findOne({ _id : adminId });
    const person = await User.findOne({ email : session.user.email });

    if( !user ) {
        return( <div className='flex items-center justify-center h-[500px]' >
            <h3 className='font-bold text-2xl border-b-4 border-lightBlue py-2' >{ERROR.PROBLEM}</h3>
        </div> )
    }

    const advertisments = await Advertisement.find({ UserId : adminId });    
    const published = await Advertisement.find({ PublishedBY : user.email })

    return ( <UserDetailPage 
                    user={ user } 
                    advertisments={ advertisments } 
                    role={ person.role } 
                    published={ published } /> );
};

export default page;