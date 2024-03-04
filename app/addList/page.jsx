"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic()
{
  let router = useRouter();
  const[title,setnewTitle]=useState("")
  const [description, setnewDescription] = useState("")
  const [date, setnewDate]
  =useState("")

  
  const addListHandler = async (e) => {
    
    e.preventDefault()
    
    let data = {
      title,
      description,
      date
    }

    try {
      
      let res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      
      if (!res.ok)
      {
        throw new Error('Failed to Insert')
      }

      router.push('/')
      router.refresh()      
        
    } catch (error) {
     console.log(error.message) 
    }
    
  }
  
  return (
    <form onSubmit={addListHandler} className="flex flex-col gap-5">
      <input
        onChange={e => setnewTitle(e.target.value)}
        value={title}
        className='border-slate-500 px-6 py-4'
        type="text"
        placeholder="Topic"
        required
      />
      <input
        onChange={e => setnewDescription(e.target.value)}
        value={description}
        className='border-slate-500 px-6 py-4'
        type="text"
        placeholder="Description"
        required
      /> 
      <input
        onChange={e => setnewDate(e.target.value)}
        value={date} 
        type="date"
        className='border-slate-500 px-6 py-4'
        required
      />
      <button type="submit" className="text-white bg-green-600 font-bold px-6 py-3 max-w-fit rounded-md">Add Topic</button>
    </form>
  ) 
}