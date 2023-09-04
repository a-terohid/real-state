import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import UsersPage from "@/template/UsersPage";
import { ERROR, ROLE } from "@/types/enum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

const page = async () => {

    await connectDB();
    const session = await getServerSession( authOptions )

    const user = await User.findOne({ email : session.user.email })

    if( user.role == ROLE.USER  ) {
        return( <div className='flex items-center justify-center h-[500px]' >
            <h3 className='font-bold text-2xl border-b-4 border-lightBlue py-2' >{ ERROR.ACCESS_DENIED }</h3>
        </div> )
    }

    const Users = await User.find({ role : ROLE.USER })
    

    return ( <UsersPage users={ Users } /> );
};

export default page;