"use client"

import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const TextList = ({ title, AddAdvertisementData, setAddAdvertisementData, type }) => {

    const changeHandler = (e : any , index : number ) => {
        const { value } = e.target;
        const list = [...AddAdvertisementData[type]];
        list[index] = value;
        setAddAdvertisementData({ ...AddAdvertisementData, [type]: list });
    };
    
    const addHandler = () => {
        setAddAdvertisementData({ ...AddAdvertisementData, [type]: [...AddAdvertisementData[type], ""] });
    };
    
    const deleteHandler = (index : number ) => {
        const list = [...AddAdvertisementData[type]];
        list.splice(index, 1);
        setAddAdvertisementData({ ...AddAdvertisementData, [type]: list });
    };


    return (
        <div>
            <p>{ title }</p>
            <div className=" ml-4 mt-3" >
                {  
                    AddAdvertisementData[ type ].map( ( i: any , index : number ) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:justify-start text-sm gap-x-4 mb-4 items-center justify-center" >
                            <input
                                type="text"
                                value={i}
                                onChange={(e) => changeHandler(e, index)}
                                className="rounded py-1 pl-3 text-sm w-[200px]"
                            />
                            <button onClick={() => deleteHandler(index)} className="flex mt-2 md:mt-0 items-center gap-x-2 bg-[#ff8fa3] text-[#a4133c] px-3 rounded-md py-1"  ><AiOutlineDelete />Delete</button>
                        </div>

                    )) 
                }
                <button onClick={addHandler} className="flex mt-4 text-sm items-center gap-x-2 bg-[#90e0ef] text-[#023e8a] px-5 rounded-md py-1" ><MdOutlineLibraryAdd />Add</button>
            </div>
        </div>
    );
};

export default TextList;