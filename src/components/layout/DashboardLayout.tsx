import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Advertisement from '@/models/Advertisements';
import User from '@/models/User';
import { ROLE } from '@/types/enum';
import { dashboardLayoutProps } from '@/types/types';
import connectDB from '@/utils/connectDB';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { BsPersonCircle } from "react-icons/bs"


const DashboardLayout = async ({ children , role , email }: dashboardLayoutProps ) => {

    await connectDB();
    const session = await getServerSession( authOptions )

    const user = await User.findOne({ email : session.user.email })

    let advertisments = []

    if( user.role != ROLE.USER  ) {
        advertisments = await Advertisement.find({ Published: false , RejectNUM : 0 , Rejected : true })
    }


    const LinkStyle = "bg-pinkBrown w-fit px-3 py-1 rounded-lg text-sm lg:text-base flex gap-x-1 items-center "
    const notificationStyle = ' bg-[#e85d04] p-1 w-6 h-6 text-f6 rounded-[50%] text-xs text-center '

    return (
        <div className=' container flex flex-col lg:flex-row lg:gap-x-8 lg:gap-y-0 gap-y-4 mt-4 pb-10 ' >
            <div className='flex overflow-auto gap-x-2 lg:flex-col lg:gap-y-3 h-fit lg:bg-pinkBrown lg:w-fit lg:min-w-[248px] lg:py-4 lg:px-4 rounded-xl shadow-xl' >
                <div className='lg:flex hidden flex-col items-center border-b-2 pb-3' >
                    <BsPersonCircle className=" text-4xl mb-2 " />
                    <p className=' mb-3' >{ email }</p>
                    { role == ROLE.ADMIN ? <p className=' px-2 font-bold bg-[#88d4ab] text-[#14746f] rounded-md'>admin</p> : null }
                    { role == ROLE.OWNER ? <p className=' px-2 font-bold bg-[#e0aaff] text-[#5a189a] rounded-md' >owner</p> : null }
                </div>
                <Link className={ LinkStyle }  href="/dashboard" >Dashboard</Link>
                <Link className={ LinkStyle }  href="/dashboard/profile" >Profile</Link>
                <Link className={ LinkStyle }  href="/dashboard/my-advertisments" >MyAdvertisments</Link>
                <Link className={ LinkStyle }  href="/dashboard/add-advertisments" >AddAdvertisments</Link>
                { role == ROLE.ADMIN || role == ROLE.OWNER ? <Link className={ LinkStyle } href="/dashboard/waiting-Advertisments" >waitingAdvertisments { advertisments.length > 0 ? <span className={ notificationStyle } >{ advertisments.length }</span> : null }</Link> : null }
                { role == ROLE.ADMIN || role == ROLE.OWNER ? <Link className={ LinkStyle } href="/dashboard/users" >Users</Link> : null }
                { role == ROLE.OWNER ? <Link className={ LinkStyle } href="/dashboard/admins" >Admins</Link> : null }
            </div>
            <div className=' bg-wg w-full rounded-xl shadow-xl' >{ children }</div>
        </div>
    );
};

export default DashboardLayout;