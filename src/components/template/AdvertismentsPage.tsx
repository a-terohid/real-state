import Sidebar from '@/layout/Sidebar';
import Card from '@/module/Card';
import { ERROR } from '@/types/enum';
import { Advertisement } from '@/types/types';
import { Capitaliz } from '@/utils/capitalize';
import React from 'react';

const AdvertismentsPage = ( { data , params } ) => {
    

    return (
        <div className='container flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-0 gap-y-4 mt-4 pb-10' >
            <div >
                <Sidebar params={params} />
            </div>
            <div className=' bg-wg w-full rounded-xl shadow-xl py-4 px-6 ' >
                { params ? <p className=' text-lg font-bold' >{ Capitaliz(params) }: </p> : null }
                <div className='flex flex-wrap gap-6 items-center justify-center' >
                    { data.length ? null : 
                            <p className=' font-bold ml-5 mt-4 text-sm text-orange' >{ ERROR.NO_ADS }</p> }
                    { data.map(( advertisement : any ) => (
                        <Card key={ advertisement._id } data={advertisement} dashboard={ false } waiting={false} />))
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertismentsPage;