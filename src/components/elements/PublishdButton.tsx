"use client"

import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const PublishdButton = ({ _id }) => {

    const router = useRouter();

    const publishHandler = async () => {

        const res = await fetch(`/api/advertisement/publish/${ _id }`, {
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
            <button onClick={ publishHandler } className='bg-[#92e6a7] text-[#155d27] text-sm md:font-bold md:text-base   md:px-8 flex gap-x-2 items-center  px-3 py-1 rounded-md ' >Publish</button>
            <Toaster />
        </div>
    );
};

export default PublishdButton;