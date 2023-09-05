import UserCard from "@/module/UserCard";
import { ERROR } from "@/types/enum";


const UsersPage = ({ users }) => {
    return (
        <div className="py-4 px-6" >
            <h1 className=" font-bold text-xl mb-3" >users: </h1>
            <div className="flex flex-wrap gap-6 items-center justify-center" >
                { !users ? <p className=' font-bold ml-5 mt-4 text-sm text-orange' >{ ERROR.NO_USER }</p> : null }
                {
                    users? users.map( user =>
                        <UserCard data={ user } key={ user._id } />
                     )  : null
                }
            </div>
        </div>
    );
};

export default UsersPage;