import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request)
{
  try {
    const { title, description,date } = await request.json();
  
    //connecting MongoDb
    await connectMongoDB();
    await Topic.create({ title, description,date});
    return NextResponse.json({
      message:'List Inserted'
    },
      {
        status:201,
      })
  
  } catch (error) {
    console.log(error)
  }

}

export async function GET()
{
  await connectMongoDB();
  const List = await Topic.find();
  return NextResponse.json({
    List
  })
}

export async function DELETE(request)
{
  //getting request id from searchParams
  const id = request.nextUrl.searchParams.get("id");
  
  await connectMongoDB();
  
  await Topic.findByIdAndDelete(id);
  
  return NextResponse.json({
    message:'List deleted'
  },
    {
      status:200
    }
  )
  
}