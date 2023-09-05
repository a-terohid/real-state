import Advertisement from "@/models/Advertisements";
import DetailsPag from "@/template/DetailsPag";
import { ERROR } from "@/types/enum";
import connectDB from "@/utils/connectDB";


const page = async ({ params : { adsId } }) => {

    

    await connectDB()
    const advertisments = await Advertisement.findOne({ _id : adsId });
    

    if( !advertisments ) {
        return( <div className='flex items-center justify-center h-[500px]' >
            <h3 className='font-bold text-2xl border-b-4 border-lightBlue py-2' >{ERROR.PROBLEM}</h3>
        </div> )
    }

    return ( <DetailsPag advertisments={ advertisments }  dashboard={ true } admin={true} waiting={ true }  />);
};

export default page;