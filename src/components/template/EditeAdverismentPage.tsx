"use client"

import DatePeaker from "@/module/DatePeaker";
import Input from "@/module/Input";
import Loader from "@/module/Loader";
import RaidoList from "@/module/RaidoList";
import TextList from "@/module/TextList";
import { CATEGORY } from "@/types/enum";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";


const EditeAdverismentPage = ({ advertisments  }) => {

    const { _id,
            Title,
            Description, 
            Cost, 
            Category, 
            Address , 
            Phone, 
            RealState, 
            Amenities , 
            Rules,
            ConstructionDate  } = advertisments

    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false);
    const [ AddAdvertisementData , setAddAdvertisementData ] = useState({
        _id ,
        title : Title,
        description : Description,
        cost : Cost ,
        category : Category ,
        address :Address ,
        phone :Phone,
        realState :RealState,
        constructionDate : ConstructionDate ,
        amenities : Amenities,
        rules: Rules,
    })

    

    const { title,
            description, 
            cost, 
            category, 
            address , 
            phone, 
            realState, 
            amenities , 
            rules,
            constructionDate  } = AddAdvertisementData

            console.log(amenities);
            console.log(rules);
            
        
            

    const changeHandler = ( event: any ) => {
        const { name , value } = event.target
       setAddAdvertisementData({ ...AddAdvertisementData , [ name ] : value })
    }

    const editeHandler = async ( event: any ) => {

        event.preventDefault()

        setLoading(true);

        const res = await fetch("/api/advertisement", {
            method: "PATCH",
            body: JSON.stringify( AddAdvertisementData ),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        setLoading(false);

        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          router.push( `/dashboard/my-advertisments/${ _id }` )
        }
    }


    return (
        <div className="py-4 px-6" >
            <h1 className=" font-bold md:text-2xl text-xl mb-3" >Edite advertisments</h1>
            <div className="flex flex-col gap-y-6 md:ml-14" >
                <Input
                    value={ title }
                    name= "title"
                    changeHandler = {changeHandler}
                    label= "Title:"
                    type = "text"
                    textarea = {false} />
                <Input
                    value={ description }
                    name= "description"
                    changeHandler = {changeHandler}
                    label= "Description:"
                    type = "text"
                    textarea = {true} />
                <Input
                    value={ address }
                    name= "address"
                    changeHandler = {changeHandler}
                    label= "Address:"
                    type = "text"
                    textarea = {true} />
                <Input
                    value={ phone }
                    name= "phone"
                    changeHandler = {changeHandler}
                    label= "Phone:"
                    type = "text"
                    textarea = {false} />
                <Input
                    value={ realState }
                    name= "realState"
                    changeHandler = {changeHandler}
                    label= "RealState:"
                    type = "text"
                    textarea = {false} />
                <Input
                    value={ cost }
                    name= "cost"
                    changeHandler = {changeHandler}
                    label= "Cost:"
                    type = "text"
                    textarea = {false} />
                <RaidoList category={ category } changeHandler={ changeHandler } />
                <TextList
                    title="Amenities: "
                    AddAdvertisementData={ AddAdvertisementData }
                    setAddAdvertisementData={ setAddAdvertisementData}
                    type="amenities" />
                <TextList
                    title="Rules: "
                    AddAdvertisementData={ AddAdvertisementData }
                    setAddAdvertisementData={ setAddAdvertisementData}
                    type="rules"/>
                <DatePeaker   
                    AddAdvertisementData={ AddAdvertisementData }
                    setAddAdvertisementData={ setAddAdvertisementData} />
            </div>
            <div className="flex items-center justify-center mt-8 mb-4" >
                {
                    loading ? <Loader/> 
                    : <button type="submit" onClick={ ( e ) => editeHandler( e ) }  className=" bg-Lorange font-bold md:px-16  px-6 py-1 rounded-md " >Add</button>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default EditeAdverismentPage;