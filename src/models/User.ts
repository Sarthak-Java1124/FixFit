import { number } from "framer-motion"
import mongoose , {Schema , Document} from "mongoose"

 export interface SignUp extends Document {
   firstname: string;
   lastname: string;
   email: string;
   password: string;
 }

const UserModel: Schema<SignUp> = new mongoose.Schema({
  firstname: {
    type: String,

    required: [true, "First Name is Required"],
  },
  lastname: {
    type: String,

    required: [true, "Last Name is Required"],
  },
  email : {
    type : String,
    required : [true , "Email is required"],

  },
  password : {
    type : String,
    required : [true , "Password is required"],
    
  }
});

const User = (mongoose.models.User as mongoose.Model<SignUp>) || (mongoose.model<SignUp>("User" , UserModel));

export default User;

