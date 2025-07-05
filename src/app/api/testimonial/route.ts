import dbConnect from "@/lib/dbConnect";
import TestimonialUser from "@/models/Testimonial";
import { NextRequest, NextResponse } from "next/server";
import { success } from "zod/v4";


export  async function POST(request: NextRequest){

    await dbConnect();

    try{
     
        const {name , position , experience} = await request.json();

        const newForm = await TestimonialUser.create({
            name,
            position,
            experience
        });

        
        await newForm.save();
         return Response.json({
            success : true,
            message : "The form submitted sucessfully"
         })

    }catch(error){
          return Response.json({
            success : false,
            message: "There was an error submitting the form "
          })
    }
}


export async function GET(){

    await dbConnect();

    try {
        const testimonial = await TestimonialUser.find({});
        return NextResponse.json(testimonial);
    } catch (error) {
        return Response.json({
            success : false,
            message  : "Unable to fetch testimonials"
        })
    }

}