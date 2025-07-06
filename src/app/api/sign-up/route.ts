import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

  export async function POST(req : Request){
    try {
      await dbConnect();
      
      const {email , password , firstname , lastname} = await req.json();
      
      if (!email || !password || !firstname || !lastname) {
        return Response.json({
          success: false,
          message: "All fields are required"
        }, { status: 400 });
      }
      
      const ifUserExists = await User.findOne({
          email
      });
      if(ifUserExists){
          console.log("The user is already present");
          return Response.json({
              success : false,
              message : "User already exists"
          }, { status: 409 });
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
      console.error("Sign up error:", error);
      return Response.json({
        success : false,
        message : "There is an error while creating the user"
      }, { status: 500 });
    }
  }