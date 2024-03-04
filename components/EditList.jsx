"use client"

import {useRouter} from 'next/navigation'
import { useState } from "react"

export default function ({id,title,description,date})
{
  let router = useRouter();
  const [newTitle,setNewTitle]=useState(title)  
  const [newDescription, setNewDescription] = useState(description)  
  const [newDate, setnewDate] = useState(date)
  
  const updateListHandler = async (e) => {
    e.preventDefault()
      
      let data = {
        newTitle,
        newDescription,
        newDate
    }
    
    console.log(data)

      try {
        
        let res = await fetch(`http://localhost:3000/api/topics/${id}`, {
          method: 'PUT',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
        
        if (!res.ok)
        {
          throw new Error('Failed to Update')
        }
        
        router.push('/')
        router.refresh()          
      } catch (error) {
      console.log(error.message) 
      }
  } 
  

  
  return (
    < form onSubmit={updateListHandler} className = "flex flex-col gap-5" >
      <input
        onChange={e => setNewTitle(e.target.value)}
        value={newTitle}
        className='border-slate-500 px-6 py-4'
        type="text"
        placeholder="Topic"
      />
      <input
        onChange={e => setNewDescription(e.target.value)}
        value={newDescription}
        className='border-slate-500 px-6 py-4'
        type="text"
        placeholder="Description"
      />
      <input
        onChange={e => setnewDate(e.target.value)}
        value={newDate} 
        type="date"
        className='border-slate-500 px-6 py-4'
        required
      />
      <button type="submit"className="text-white bg-green-600 font-bold p-2 max-w-fit rounded-md">Update Topic</button>
    </form>

    ) 
}