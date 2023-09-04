import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyAdvertisementPage from "@/template/MyAdvertisementPage"
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";


const page = async () => {

    await connectDB();
    const session = await getServerSession( authOptions )
    const [user] = await User.aggregate([ 
        { $match: { email: session.user.email } } , 
        {
            $lookup: {
                from: "real-state-Advertisemen",
                foreignField: "UserId",
                localField: "_id",
                as: "Advertisement",
            }
        }
    ])

    const userAdvertisement = user.Advertisement;
    
    return ( <MyAdvertisementPage userAdvertisement={ userAdvertisement }  /> );
};

export default page;