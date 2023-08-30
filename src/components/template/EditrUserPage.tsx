"use client"

import { ProfilePageProps } from "@/types/types";
import Input from "@/module/Input";
import { useState } from "react";
import Loader from "@/module/Loader";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'

const EditrUserPage = ( { user } : ProfilePageProps ) => {

    const { name , lastName , email , number , personalID } = user

    const [ USER , setUser ] = useState({
        name: name,
        lastName: lastName,
        email: email,
        number: number,
        personalID: personalID
    })
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const changeHandler = ( event: any ) => {
        const { name , value } = event.target
        setUser({ ...USER , [ name ] : value })
    }

    const editeHandler = async ( event: any ) => {

        event.preventDefault()

        setLoading( true )

        const res = await fetch("/api/user" , {
            method: "PATCH",
            body : JSON.stringify( USER ),
            headers: { "Content-Type": "application/json" },
        })

        const resData = await res.json()
        console.log( resData );

        setLoading( false );

        if (resData.error) {
            toast.error(resData.error);
        } else {
            router.push("/dashboard/profile");
        }

    }

    return (
        <div className="py-4 px-6" >
            <h1 className=" font-bold text-2xl mb-3" >Edite User</h1>
            <div className="flex flex-col gap-y-4 md:ml-14" >
                <Input
                    value={ USER.name }
                    name= "name"
                    changeHandler = {changeHandler}
                    label= "Name:"
                    type = "text" />
                <Input
                    value={ USER.lastName }
                    name= "lastName"
                    changeHandler = {changeHandler}
                    label= "Last Name:"
                    type = "text" />
                <Input
                    value={ USER.email }
                    name= "email"
                    changeHandler = {changeHandler}
                    label= "Email:"
                    type = "text" />
                <Input
                    value={ USER.number }
                    name= "number"
                    changeHandler = {changeHandler}
                    label= "Phone Number:"
                    type = "text" />
                <Input
                    value={ USER.personalID }
                    name= "personalID"
                    changeHandler = {changeHandler}
                    label= "PersonalID:"
                    type = "text" />
            </div>
            <div className="flex items-center justify-center mt-8 mb-4" >
                {
                    loading ? <Loader/> 
                    : <button type="submit" onClick={ ( e ) => editeHandler( e ) } className=" bg-Lorange font-bold md:px-16  px-6 py-1 rounded-md " >Edite</button>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default EditrUserPage;