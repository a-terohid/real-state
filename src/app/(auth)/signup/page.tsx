import Signup from "@/template/Signup";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";


const page = async () => {

    await connectDB();
    const session = await getServerSession( authOptions )
    if ( session ) redirect("/")

    return ( <Signup /> );
};

export default page;