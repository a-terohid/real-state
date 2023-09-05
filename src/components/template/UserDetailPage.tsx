import Card from "@/module/Card";
import { ROLE } from "@/types/enum";
import { mask } from "@/utils/mask";
import PromoteButton from "../elements/PromoteButton";

const UserDetailPage = ({ user , advertisments , role , published }) => {

    const { name , lastName , email , number , personalID ,numberOfAds , _id } = user

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
                    { number ? <span className=' ml-3' >{ mask( number , "****-***-****" ) }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
            </div>
            <div className=' flex flex-col md:flex-row md:gap-x-14 lg:gap-x-20  md:py-6 flex-wrap py-3 border-b-2 '>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >personalID:</p>
                    { personalID ? <span className=' ml-3' >{ personalID }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
                <div className='flex flex-wrap items-center' >
                    <p className=' font-bold md:text-lg' >Number of Advertisment:</p>
                    { numberOfAds ? <span className=' ml-3' >{ numberOfAds }</span> : <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> } 
                </div>
            </div>
            <div className=' flex flex-col gap-y-3 py-5  border-b-2' >
                <h3 className=' font-bold md:text-lg' >Advertisment: </h3>
                <div className="ml-3">
                    { !advertisments ? <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> : null }
                    {
                        advertisments ?
                         advertisments.map( ads => <Card 
                                                        key={ ads._id } 
                                                        data={ads} 
                                                        userID={ _id }  
                                                        admin={ true } /> )
                        : null
                    }
                </div>
            </div>
                {
                    role === ROLE.OWNER && user.role === ROLE.USER ? 
                        <div className=" py-6 flex justify-center " >
                            <PromoteButton  text="Admin" promoteTo={ ROLE.ADMIN } userId={ _id }  />
                        </div>: null
                }
                {
                    user.role === ROLE.ADMIN ?<div>
                        <div className=' flex flex-col gap-y-3 py-5' >
                            <h1 className=' font-bold md:text-lg' >Published Advertisment: </h1>
                            <div className="ml-3" >
                                {   !published ? <span className=' ml-3 text-sm md:text-base italic text-orange ' >this filed is epmty!</span> : null  }
                                {
                                    published ? published.map( ads => <Card key={ ads._id } data={ads} /> ) : null
                                }
                            </div>
                        </div>
                    </div> : null
                }
        </div>
    )
};

export default UserDetailPage;