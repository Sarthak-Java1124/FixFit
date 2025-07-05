import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";
import { success } from "zod/v4";


export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
  
      name: "Credentials",
      id  : "credentials",
  
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials : any) : Promise<any> {
          await dbConnect();
        try {
          const isUserPresent = await User.findOne({
              email : credentials.email
          });
          if(!isUserPresent){
              throw new Error("You are not registered sir");
              
          }
          
          const isPasswordCorrect = await bcrypt.compare(credentials.password, isUserPresent.password);
          if(!isPasswordCorrect){
            throw new Error("The Password is Incorrect");
          }
          return isUserPresent;
          
        }catch(error){
          throw new Error("An error occured while sigining you in");
        }
      
        
      }
    }),
    
  ],
  callbacks : {
    async  jwt({token , user}) {
         if(user){
          token._id = user._id?.toString();

         }
         return token;
    },

    async session({session , token}) {
        if(token){
          session.user._id = token._id;
        }
        return session;
    },
    
  },
  pages : {
    signIn : "/sign-in"
  },
  session : {
    strategy : "jwt",
  },

  secret : process.env.NEXTAUTH_SECRET

             
  
} 