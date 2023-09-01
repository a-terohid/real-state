import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";


const page = async () => {

    await connectDB();
    const session = await getServerSession( authOptions )
    const user = await User.findOne({ email : session.user.email })


    return (
        <div>
            
        </div>
    );
};

export default page;