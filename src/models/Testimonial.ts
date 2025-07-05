import mongoose ,{ Document , Schema } from "mongoose"

export  interface Testimonial extends Document{
    name : string,
    position : string,
    experience : string,
}

const TestimonialSchema: Schema<Testimonial> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

const TestimonialUser =  (mongoose.models.TestimonialUser as mongoose.Model<Testimonial>) || (mongoose.model<Testimonial>("TestimonialUser" , TestimonialSchema));

export default TestimonialUser;
