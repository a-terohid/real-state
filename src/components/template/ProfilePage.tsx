import User from '@/models/User';
import LogOutButtom from '@/module/LogOutButtom';
import { ProfilePageProps } from '@/types/types';
import Link from 'next/link';

const ProfilePage = ( { user } : ProfilePageProps ) => {

    const { name , lastName , email , number , personalID } = user

    return (
        <div className='py-4 px-6' >
            <div className=' flex flex-col md:flex-row md:gap-x-14 lg:gap-x-20  md:py-6 flex-wrap py-3 border-b-2'>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >Name:</p>
                    { name ? <span className=' ml-3' >{ name }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >LastName:</p>
                    { lastName ? <span className=' ml-3' >{ lastName }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
            </div>
            <div className=' flex flex-col md:flex-row md:gap-x-14 lg:gap-x-20  md:py-6 flex-wrap py-3 border-b-2'>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >Email:</p>
                    { email ? <span className=' ml-3' >{ email }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
                <div className='flex flex-wrap items-center'>
                    <p className=' font-bold md:text-lg' >Phone Number:</p>
                    { number ? <span className=' ml-3' >{ number }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
            </div>
            <div className=' flex flex-col md:flex-row md:gap-x-14 lg:gap-x-20  md:py-6 flex-wrap py-3 border-b-2 '>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >personalID:</p>
                    { personalID ? <span className=' ml-3' >{ personalID }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
            </div>
            <div className=' my-4 md:mt-10 flex items-center justify-center gap-x-4'>
                <Link href="/dashboard/profile/edite" className=' bg-pinkBrown font-bold md:px-8  px-3 py-1 rounded-md ' >Edite Profile</Link>
                <LogOutButtom />
            </div>
        </div>
    );
};

export default ProfilePage;