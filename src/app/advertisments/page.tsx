import Advertisement from '@/models/Advertisements';
import AdvertismentsPage from '@/template/AdvertismentsPage';
import connectDB from '@/utils/connectDB';
import React from 'react';

const page = async ({ searchParams }) => {

    await connectDB();
    const advertisments = await Advertisement.find()

    let finalData = advertisments;
    if (searchParams.category) {
        finalData = finalData.filter((i) => i.Category === searchParams.category);
    }


    return ( <AdvertismentsPage data={ finalData } params={ searchParams.category } /> );
};

export default page;