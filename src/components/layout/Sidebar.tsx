import { categoriesString } from "@/constants/String";
import { Capitaliz } from "@/utils/capitalize";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";

const Sidebar = ({params}) => {
    
    return (
        <div className='flex overflow-auto gap-x-2 lg:flex-col lg:gap-y-3 h-fit bg-pinkBrown lg:w-fit lg:min-w-[230px] lg:py-4 px-4 rounded-xl shadow-xl py-3 ' >
            <p className="flex items-center gap-x-1" ><HiFilter/>Category:</p>
            <div className="flex lg:flex-col gap-x-3 lg:pl-3" >
                <Link className= {` w-fit px-3 py-1 rounded-lg text-sm lg:text-base ${ !params ? "bg-orange": "bg-Lorange lg:bg-pinkBrown" } `} href='./advertisments' >All</Link>
                {
                    Object.keys( categoriesString ).map( (i) => (
                        <Link
                            href={{
                                pathname: "/advertisments",
                                query: { category: i },
                            }}
                            className= {` w-fit px-3 py-1 rounded-lg text-sm lg:text-base ${ params == i ? "bg-orange": "bg-Lorange lg:bg-pinkBrown" } `}
                            >
                            { Capitaliz( categoriesString[i] ) }
                            </Link>
                    ) )
                }
            </div>
        </div>
    );
};

export default Sidebar;