import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request,{params})
{
  const { id } = params;
  
  const { newTitle: title, newDescription: description,newDate:date } =await request.json();
  
  await connectMongoDB();
  
  const data = await Topic.findByIdAndUpdate(id, { title, description ,date},{new:true})
  
  return NextResponse.json({
    message: 'List Updated',
    data
  },
    {
      status:200
    })
  
}

export  async function GET(request,{params})
{
  const { id } = params;
  
  await connectMongoDB();
  
  const selectedTopic=await Topic.findOne({_id:id});
  
  return NextResponse.json({selectedTopic},{status:200})
}