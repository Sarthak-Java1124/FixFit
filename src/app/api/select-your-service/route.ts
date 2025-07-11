import dbConnect from "@/lib/dbConnect";
import Service from "@/models/SelectService";
import { NextRequest } from "next/server";

export async function POST(request : NextRequest){
         await dbConnect();

         try{
    const {gender , location , service , requirements}  = await request.json();

    const selections = await Service.create({
        gender,
        location,
        service,
        requirements,

    });
    await selections.save();
    return Response.json({
             success : true,
             message : "Services created successfully"
    });
}catch{
    
    return Response.json({
      success: false,
      message: "There was a problem fetching services from user",
    });
}

}