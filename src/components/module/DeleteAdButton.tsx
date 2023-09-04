"use client"

import { BsTrash3 } from "react-icons/bs"

const DeleteAdButton = () => {
    return (
        <div>
            <button className=' bg-[#ff8fa3] text-[#a4133c] text-sm md:font-bold md:text-base   md:px-8 flex gap-x-2 items-center  px-3 py-1 rounded-md ' ><BsTrash3 />Delete</button>
        </div>
    );
};

export default DeleteAdButton;