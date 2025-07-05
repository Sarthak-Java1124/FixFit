import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

  export async function POST(req : Request){
    await dbConnect();

          try{
            const {email , password , firstname , lastname} = await req.json();
            
            const ifUserExists = await User.findOne({
                email
            });
            if(ifUserExists){
                console.log("The user is already present");
                return Response.json({
                    success : false,
                    message : "User already exists"

                })
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
              email,
              password : hashedPassword,
              firstname,
              lastname
            
            });

           await user.save();
            return Response.json({
                success : true,
                message : "The user is registered succesfully"
            })
          }catch(error){
                 console.log("The error while sign up is : " , error);
               return Response.json({
                success : false,
                message : "There is an error while parsing the user"
               })
          }
       



  }