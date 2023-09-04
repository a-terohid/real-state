import Advertisement from "@/models/Advertisements";
import DetailsPag from "@/template/DetailsPag";
import { ERROR } from "@/types/enum";
import connectDB from "@/utils/connectDB";


const page = async ({ params: { advertismentsId } }) => {

    await connectDB()
    
    const advertisments = await Advertisement.findOne({ _id : advertismentsId })
    

    if( !advertisments ) {
        return( <div className='flex items-center justify-center h-[500px]' >
            <h3 className='font-bold text-2xl border-b-4 border-lightBlue py-2' >{ERROR.PROBLEM}2</h3>
        </div> )
    }

    return ( <DetailsPag advertisments={ advertisments }  dashboard={ false } /> );
};

export default page;