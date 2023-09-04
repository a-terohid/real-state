import { icons } from "@/constants/icons";
import Checkbutton from "src/components/elements/CheckButton";
import DeleteAdButton from "src/components/elements/DeleteAdButton";
import { ADS_STATUS } from "@/types/enum";
import { adsStatus } from "@/utils/adsStatus";
import { sp } from "@/utils/mask";
import Link from "next/link";
import RejectButton from "../elements/RejectButton";
import PublishdButton from "../elements/PublishdButton";


const DetailsPag = ({ advertisments , dashboard , waiting }) => {

    const { Title, 
            Description,
            Cost,
            Category, 
            Address, 
            Phone, 
            RealState, 
            Amenities, 
            Rules, 
            PublishedBY,
            Published, 
            Rejected,
            RejectNUM,
            ConstructionDate,
            _id } = advertisments 

            
            const status = adsStatus(  Published  , Rejected ,RejectNUM )

    

    return (
        <div className=" container  bg-wg w-full rounded-xl shadow-xl py-3" >
            <div className="flex md:items-center flex-col md:flex-row md:gap-x-36 mt-5 pb-4 border-b-2 " >
                <h1 className=" font-bold md:text-lg" >{ Title }</h1>
                <div className="flex gap-x-2 items-center w-fit md:px-3 p-1 md:m-0 mt-3 md:py-2 rounded-md bg-Lorange text-sm" >
                    <p className="flex gap-x-2 items-center text-xl " >{ icons[ Category ] }</p>
                    <p>{ Category }</p>
                </div>
            </div>
            <div className="py-4 border-b-2" >
                <p className=" font-bold md:text-lg text-sm text-orange" >Description: </p>
                <p className=" ml-4 text-xs md:text-base " >{ Description }</p>
            </div>
            <div className="py-4 border-b-2" >
                <p className=" font-bold md:text-lg text-sm text-orange" >Address: </p>
                <p className=" ml-4 text-xs md:text-base" >{ Address }</p>
            </div>
            <div className="py-4 border-b-2" >
                <div className="flex gap-x-2 items-center" >
                    <p className=" font-bold md:text-lg text-sm text-orange" >Phone: </p>
                    <p className="text-xs md:text-base" >{ Phone }</p>
                </div>
                <div className="flex gap-x-2 items-center" >
                    <p className=" font-bold md:text-lg text-sm text-orange" >RealState: </p>
                    <p className="text-xs md:text-base" >{ RealState }</p>
                </div>
                <div className="flex gap-x-2 items-center" >
                    <p className=" font-bold md:text-lg text-sm text-orange" >ConstructionDate: </p>
                    <p className="text-xs md:text-base" >{ new Date( ConstructionDate ).toLocaleDateString() }</p>
                </div>
                
            </div>
            <div className="py-4 border-b-2" >
                    <p className=" font-bold md:text-lg text-sm text-orange" >Amenities: </p>
                    {
                        !Amenities ? <p className=" ml-4 text-xs md:text-base" >There are no amenities!</p> : null
                    }
                    <div className="ml-8" >
                        <ul className=" list-disc gap-y-2 flex flex-col " >
                            {
                                Amenities ? Amenities.map( ( i : any , index : number ) => ( <li className="text-xs md:text-base" key={ index } >{ i }</li> ) ) : null
                            }
                        </ul>
                    </div>
            </div>
            <div className="py-4 border-b-2" >
                    <p className=" font-bold md:text-lg text-sm text-orange" >Rules: </p>
                    {
                        !Rules ? <p className="text-xs md:text-base ml-4" >There are no rules!</p> : null
                    }
                    <div className="ml-8" >
                        <ul className=" list-disc gap-y-2 flex flex-col text-xs md:text-base" >
                            {
                                Rules ? Rules.map( ( i : any , index : number ) => ( <li className="text-xs md:text-base" key={ index } >{ i }</li> ) ) : null
                            }
                        </ul>
                    </div>
            </div>
            <div className="py-4 border-b-2 flex gap-x-2 items-center " >
                <p className=" font-bold md:text-lg text-sm text-orange" >Cost: </p>
                <p className=" ml-4 text-xs md:text-base" >{ sp( Cost ) }</p>
            </div>
            { 
                !dashboard ? <div>
                    {
                        status === ADS_STATUS.PUBLISHED ?
                        <div className="py-4" >
                            <div className="flex gap-x-2 items-center" >
                                <p className=" font-bold md:text-lg text-sm text-orange" >Status: </p>
                                <p className="text-xs md:text-base" >{ status }</p>
                            </div>
                            <div className="flex gap-x-2 items-center" >
                                <p className=" font-bold md:text-lg text-sm text-orange" >PublishedBY: </p>
                                <p className="text-xs md:text-base" >{ PublishedBY }</p>
                            </div>
                        </div> : null
                    }
                </div> : null 
            }
            {
                dashboard && !waiting ? <div className="border-b-2">
                    {
                        status === ADS_STATUS.PUBLISHED ? 
                            <div className="py-4 flex flex-col gap-y-3" >
                                <div className="flex gap-x-3 items-center" >
                                    <p className=" font-bold md:text-lg text-sm text-orange" >Status: </p>
                                    <p className=" bg-[#92e6a7] text-[#155d27] px-2 py-1 rounded text-xs md:text-base w-fit" >{ status }</p>
                                </div>
                                <div className="flex gap-x-2 items-center" >
                                    <p className=" font-bold md:text-lg text-sm text-orange" >PublishedBY: </p>
                                    <p className="text-xs md:text-base" >{ PublishedBY }</p>
                                </div>
                            </div> : null
                    }
                    {
                        status === ADS_STATUS.WAITING ? 
                            <div className="py-4 flex flex-col gap-y-3" >
                                <div className="flex gap-x-3 items-center" >
                                    <p className=" font-bold md:text-lg text-sm text-orange" >Status: </p>
                                    <p className=" bg-[#edc531] text-[#805b10] px-2 py-1 rounded text-xs md:text-base w-fit" >{ status }</p>
                                </div>
                            </div> : null
                    }
                    {
                        status === ADS_STATUS.REJECTED ? 
                            <div className="py-4 flex flex-col gap-y-3" >
                                <div className="flex gap-x-3 items-center" >
                                    <p className=" font-bold md:text-lg text-sm text-orange" >Status: </p>
                                    <p className=" bg-[#ff8fa3] text-[#a4133c] px-2 py-1 rounded text-xs md:text-base w-fit" >{ status }</p>
                                </div>
                                <Checkbutton _id={ _id } />
                            </div> : null
                    }
                </div> : null
            }
            {
                dashboard && !waiting ? <div className="flex py-4 gap-x-4 items-center justify-center" >
                    <Link className=' bg-pinkBrown md:px-8 text-sm md:font-bold md:text-base   px-3 py-1 rounded-md ' href={`/dashboard/my-advertisments/${_id}/edite`} >Edite</Link>
                    <DeleteAdButton  _id={ _id } />
                </div> : null
            }
            {
                dashboard && waiting ? <div className="flex py-4 gap-x-4 items-center justify-center" >
                    <PublishdButton _id = { _id } />
                    <RejectButton _id = { _id } />
                </div> : null
            }
        
        </div>
    );
};

export default DetailsPag;