import Card from "@/module/Card";
import { ERROR } from "@/types/enum";

const myAdvertisementPage = ({ userAdvertisement }) => {
    return (
        <div className="py-4 px-6 " >
            <p className="font-bold text-lg mb-3" >My Advertisements:</p>
            <div className='flex flex-wrap gap-6 items-center justify-center' >
                    { userAdvertisement.length ? null : 
                            <p className=' font-bold ml-5 mt-4 text-sm text-orange' >{ ERROR.NO_ADS }</p> }
                    { userAdvertisement.map(( advertisement : any ) => (
                        <Card key={ advertisement._id } data={advertisement}  dashboard={ true }  />))
                    }
                </div>
        </div>
    );
};

export default myAdvertisementPage;