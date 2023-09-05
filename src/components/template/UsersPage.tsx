import UserCard from "@/module/UserCard";
import { ERROR } from "@/types/enum";


const UsersPage = ({ users ,admin }) => {
    return (
        <div className="py-4 px-6" >
            {
                admin ? <h1 className=" font-bold text-xl mb-3" >Admins: </h1> : <h1 className=" font-bold text-xl mb-3" >Users: </h1>
            }
            <div className="flex flex-wrap gap-6 items-center justify-center" >
                { !users ? <p className=' font-bold ml-5 mt-4 text-sm text-orange' >{ ERROR.NO_USER }</p> : null }
                {
                    users? users.map( user =>
                        <UserCard data={ user } key={ user._id } admin={ admin ? ( true ) : false } />
                     )  : null
                }
            </div>
        </div>
    );
};

export default UsersPage;