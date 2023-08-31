import { CATEGORY } from "@/types/enum";


const RaidoList = ( { category , changeHandler } ) => {

    return (
        <div className="flex flex-col gap-y-2 " >
            <p>Category : </p>
            <div className="flex gap-x-4 overflow-auto ml-4" >
                <div className="flex items-center gap-x-2 px-3 bg-orange rounded-md py-1 text-f6 text-sm " >
                    <label htmlFor={ CATEGORY.APARTMENT } >Apartment</label>
                    <input 
                        type= "radio"
                        name= "category"  
                        value= { CATEGORY.APARTMENT }
                        id = { CATEGORY.APARTMENT }
                        checked={ category === CATEGORY.APARTMENT }
                        onChange={ ( event ) => changeHandler( event ) } />
                </div>
                <div className="flex items-center gap-x-2 px-3 bg-orange rounded-md py-1 text-f6 text-sm " >
                    <label htmlFor={ CATEGORY.OFFICE } >Office</label>
                    <input 
                        type= "radio"
                        name= "category"  
                        value= { CATEGORY.OFFICE }
                        id = { CATEGORY.OFFICE }
                        checked={ category === CATEGORY.OFFICE }
                        onChange={ ( event ) => changeHandler( event ) } />
                </div>
                <div className="flex items-center gap-x-2 px-3 bg-orange rounded-md py-1 text-f6 text-sm " >
                    <label htmlFor={ CATEGORY.STORE } >Store</label>
                    <input 
                        type= "radio"
                        name= "category"  
                        value= { CATEGORY.STORE }
                        id = { CATEGORY.STORE }
                        checked={ category === CATEGORY.STORE }
                        onChange={ ( event ) => changeHandler( event ) } />
                </div>
                <div className="flex items-center gap-x-2 px-3 bg-orange rounded-md py-1 text-f6 text-sm " >
                    <label htmlFor={ CATEGORY.VILLA } >Villa</label>
                    <input 
                        type= "radio"
                        name= "category"  
                        value= { CATEGORY.VILLA }
                        id = { CATEGORY.VILLA }
                        checked={ category === CATEGORY.VILLA }
                        onChange={ ( event ) => changeHandler( event ) } />
                </div>
            </div>
        </div>
    );
};

export default RaidoList;