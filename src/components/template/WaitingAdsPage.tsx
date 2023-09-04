import Card from "@/module/Card";
import { ERROR } from "@/types/enum";

const WaitingAdsPage = ({ advertisments }) => {
    return (
        <div className='py-4 px-6' >
            <div className='flex flex-wrap gap-6 items-center justify-center' >
                { advertisments.length ? null : 
                        <p className=' font-bold ml-5 mt-4 text-sm text-orange' >{ ERROR.NO_ADS }</p> }
                { advertisments.map(( ads : any ) => (
                    <Card key={ ads._id } data={ads} dashboard={ true } waiting ={ true }  />))
                }
            </div>
        </div>
    );
};

export default WaitingAdsPage;