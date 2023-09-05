"use client"

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const PromoteButton = ({ text, promoteTo , userId }) => {

    const router = useRouter()

    const promotHandler = async () => {

        const res = await fetch( `/api/user/promote/${ userId }` , {
            method: "PATCH",
        })

        const result = await res.json();
        console.log(result);
    
        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success(result.message);
            router.push( "/dashboard/users" );
        }

    }

    return (
        <div>
            <button onClick={ promotHandler } className=" bg-[#92e6a7] text-[#155d27] px-2 py-1 rounded text-xs md:text-base w-fit" >Promote to { text }</button>
            <Toaster />
        </div>
    );
};

export default PromoteButton;