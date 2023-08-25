import { InputType } from "@/types/types";
import { ReactPropTypes } from "react";


const Input = ( { changeHandler , value, label , type , name } : InputType ) => {

    return (
        <div className="flex flex-col gap-y-2 " >
            <label className=" text-f6" >{ label }</label>
            <input 
                type={ type }
                value={ value }
                name={ name }  
                onChange={ ( event ) => changeHandler( event ) }
                className="ml-4 rounded py-1 pl-3 text-sm w-[200px]"  />
        </div>
    );
};

export default Input;