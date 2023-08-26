import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { ERROR } from "@/types/enum";


export const authOptions = {
    session : { strategy: "jwt" },
    providers : [ CredentialsProvider({
        async authorize( credentials ) {

            const { email , password } = credentials;
            
            try{
                await connectDB()
            } catch (err) {
                console.log(err);
                throw new Error( ERROR.SERVER_ERROR );
            }

            if( !email || !password ) throw new Error( ERROR.INVALID_DATA );

            const user = await User.findOne({ email })
            if( !user ) throw new Error( ERROR.CREATE_ACCOUNT ) 

            const isValid = await verifyPassword( password , user.password )
            if( !isValid ) throw new Error( ERROR.WRONG_PASSWORD )

            return { email };

        } 
    }) ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };