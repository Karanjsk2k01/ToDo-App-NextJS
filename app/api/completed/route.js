
import connectMongoDB from "@/libs/mongodb";
import Complete from "@/models/completed";
import { NextResponse } from "next/server";

export async function POST(request)
{
  try {
    const { title, description,date } = await request.json();
  
    //connecting MongoDb
    await connectMongoDB();
    await Complete.create({ title, description,date});
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
  const List = await Complete.find();
  return NextResponse.json({
    List
  })
}

export async function DELETE()
{
  await connectMongoDB();
  const List = await Complete.deleteMany();
  return NextResponse.json({
    List
  })
}