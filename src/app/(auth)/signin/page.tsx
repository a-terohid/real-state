import Signin from "@/template/Signin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";



const page = async () => {

    const session = await getServerSession( authOptions )
    console.log(session);


    
    if ( session ) redirect("/")

    return ( <Signin />  );
};

export default page;