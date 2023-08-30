"use client"

import Input from "@/module/Input";
import Loader from "@/module/Loader";
import { ERROR } from "@/types/enum";
import { AuthType } from "@/types/types";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Signup = () => {

    const [ data , setData ] = useState<AuthType>({
        email: "",
        password: "",
    })
    const [loading, setLoading] = useState<boolean>(false);
    const [repeat, setrepeat] = useState<string>("");

    const { email, password } = data

    const router = useRouter();

    const changeHandler = ( event: any ) => {
        const { name , value } = event.target
        setData({ ...data , [ name ] : value })
    }

    const signupHandler = async ( event: any ) => {

        event.preventDefault(); 

        if( password !== repeat ){
            toast.error( ERROR.REPEAT_PASSWORD );
            return;
        }

        setLoading( true );

        const res = await fetch("/api/auth/signup" , {
            method: "POST",
            body : JSON.stringify( data ),
            headers: { "Content-Type": "application/json" },
        })

        const resData = await res.json()
        console.log( resData );

        setLoading( false );

        if (resData.error) {
            toast.error(resData.error);
        } else {
            router.push("/");
        }
        

    }

    return (
        <div className=" container flex flex-col h-[600px] items-center justify-center " >
            <div className="border-dark border-2 w-fit p-7 shadow-xl bg-wg rounded-lg" >
                <h4 className=" text-lightBlue  text-xl" >Sign Up Form</h4>
                <form className="flex flex-col gap-y-6 mt-5" >
                    <Input 
                        value={ email }
                        name= "email"
                        changeHandler = {changeHandler}
                        label= "Email:"
                        type = "text" />
                    <Input 
                        value={ password }
                        name="password"
                        changeHandler = {changeHandler}
                        label= "Password:"
                        type = "password" />
                    <Input 
                        value={ repeat }
                        name="password"
                        changeHandler = { (event:any) => setrepeat(event.target.value) }
                        label= "repeat Password:"
                        type = "password" />
                    {
                        loading ? <Loader /> :
                            <button type="submit" onClick={ signupHandler } className=" bg-Lorange rounded py-2" >sign up</button>
                    }
                    <div className="flex items-center justify-center" >
                        <p>have an account? <Link href="/signin" className=" text-Lorange">sign in</Link></p>
                    </div>
                </form>
            </div>
           <Toaster />
        </div>
    );
};

export default Signup;