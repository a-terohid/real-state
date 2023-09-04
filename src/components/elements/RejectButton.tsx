"use client"

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const RejectButton = ({ _id }) => {

    const router = useRouter();

    const rejectHandler = async () => {

        const res = await fetch(`/api/advertisement/reject/${ _id }`, {
          method: "PATCH",
        });
    
        const result = await res.json();
        console.log(result);
    
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success(result.message);
          router.push( "/dashboard/waiting-Advertisments" );
        }
      }; 
    
    return (
        <div>
            <button onClick={ rejectHandler } className=' bg-[#ff8fa3] text-[#a4133c] text-sm md:font-bold md:text-base   md:px-8 flex gap-x-2 items-center  px-3 py-1 rounded-md ' >Reject</button>
            <Toaster />
        </div>
    );
};

export default RejectButton;