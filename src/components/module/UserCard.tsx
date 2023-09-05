import profile from "@/public/img/profile.png"
import Admin from "@/public/img/admin.png"
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const UserCard = ({ data, admin }) => {
 
    const { name, lastName, email , _id , numberOfAds } = data

    return (
        <div  className=" w-64 px-4 py-3 bg-f6 rounded-md shadow-md min-h-[200px]" >
            <div className="flex items-center justify-between" >
                {
                    !admin ? <img className=" w-10" src={ profile.src } alt="profileImg" /> 
                        : <img className=" w-10" src={ Admin.src } alt="profileImg" />
                }
                <p className="text-sm bg-[#ffc8dd] px-2 py-1 rounded-md" ><span className="font-bold" >{ numberOfAds }</span> Ads</p>
            </div>
            <div className="flex flex-col mt-4 gap-y-2" >
                <div className="flex gap-x-2 text-sm" >
                    <p className="font-bold" >Email:</p>
                    { email ? <p>{ email }</p> : <span className=' ml-2 text-xs italic text-orange ' >this filed is epmty!</span> }
                </div>
                <div className="flex gap-x-2 text-sm" >
                    <p className="font-bold" >Name:</p>
                    { name ? <p>{ name }</p> : <span className=' ml-2 text-xs italic text-orange ' >this filed is epmty!</span> }
                </div>
                <div className="flex gap-x-2 text-sm" >
                    <p className="font-bold" >Last Name:</p>
                    { lastName ? <p>{ lastName }</p> : <span className=' ml-2 text-xs italic text-orange ' >this filed is epmty!</span> }
                </div>
                <div className="flex justify-end mt-3" >
                    {
                        !admin ? <Link href={`/dashboard/users/${ _id }`} className="flex gap-x-1 font-bold text-orange items-center text-xs" ><BiLeftArrowAlt />See Advertisments</Link> 
                            : <Link href={`/dashboard/admins/${ _id }`} className="flex gap-x-1 font-bold text-orange items-center text-xs" ><BiLeftArrowAlt />See Advertisments</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserCard;