import { icons } from "@/constants/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoPricetags } from "react-icons/io5"
import Link from "next/link";
import { adsStatus } from "@/utils/adsStatus";
import { ADS_STATUS } from "@/types/enum";
import { sp } from "@/utils/mask";


const Card = ({ data , dashboard , waiting }) => {

    const { _id, Category, Title, Address, Cost , Published , Rejected ,RejectNUM } = data

    const status = adsStatus( Published , Rejected ,RejectNUM )    

    return (
        <div className=" w-64 px-4 py-3 bg-f6 rounded-md shadow-md min-h-[200px]" >
            <div className=" flex items-center justify-between mb-6">
                <p className=" font-bold" >{ Title }</p>
                <p className="flex gap-x-2 items-center text-2xl p-1 rounded-md bg-Lorange" >{ icons[ Category ] }</p>
            </div>
            <div className=" flex flex-col gap-y-4 pr-12 w-full text-sm" >
                <p className="flex gap-x-2 items-start text-xs" >
                    <HiOutlineLocationMarker className="text-2xl text-orange font-bold" />
                    <span className="mt-1" >{ Address }</span></p>
                <p className="flex gap-x-2 items-center" ><IoPricetags className="text-orange font-bold"/>{ sp( Cost ) } $</p>
            </div>
            { dashboard ?
                <div className="my-3" >
                    { status === ADS_STATUS.PUBLISHED ? <p className="text-xs bg-[#92e6a7] text-[#155d27] px-2 py-1 rounded w-fit " >{ ADS_STATUS.PUBLISHED }</p> : null }
                    { status === ADS_STATUS.REJECTED ? <p className="text-xs bg-[#ff8fa3] text-[#a4133c] text-[#] px-2 py-1 rounded w-fit " >{ ADS_STATUS.REJECTED }</p> : null }
                    { status === ADS_STATUS.WAITING ? <p className="text-xs  bg-[#edc531] text-[#805b10] px-2 py-1 rounded w-fit " >{ ADS_STATUS.WAITING }</p> : null }
                </div> : null
            }
            <div className="flex justify-end mt-3" >
                {
                    !dashboard ? 
                         <Link href={`/advertisments/${_id}`} className="flex gap-x-1 text-orange items-center text-xs" ><BiLeftArrowAlt />See Advertisments</Link>
                    : <div>
                        {
                            waiting ? 
                                <Link href={`/dashboard/waiting-Advertisments/${_id}`} className="flex gap-x-1 text-orange items-center text-xs" ><BiLeftArrowAlt />See Advertisments</Link>
                            : <Link href={`/dashboard/my-advertisments/${_id}`} className="flex gap-x-1 text-orange items-center text-xs" ><BiLeftArrowAlt />See Advertisments</Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Card;