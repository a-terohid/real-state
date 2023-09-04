"use client"

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const Checkbutton = ({ _id }) => {

    const router = useRouter();

    const checkHandler = async () => {

        const res = await fetch(`/api/advertisement/check/${ _id }`, {
          method: "PATCH",
        });
    
        const result = await res.json();
        console.log(result);
    
        if (result.error) {
          toast.error(result.error);
        } else {
          toast.success(result.message);
          router.push( "/dashboard/my-advertisments" );
        }
      }; 

    return (
        <div>
            <button onClick={ checkHandler }  className="rounded-md ml-3 bg-Lorange text-xs md:text-sm w-fit   md:px-4  px-3 py-1" >Check again</button>
            <Toaster />
        </div>
    );
};

export default Checkbutton;