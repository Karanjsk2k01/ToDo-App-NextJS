"use client";

import { TiDeleteOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  
  let router=useRouter()
  
  const handleDelete = async (e) => {
    e.preventDefault()
    
    
    let confirmed = window.confirm("Are you sure?");

    try {
      if (confirmed)
      {
      var res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{method:'DELETE'}
        )

        if (!res.ok)
        {
          throw new Error('Failed to delete')
        }     
        else {
          router.refresh()
        }        
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  return (
    <button
      onClick={handleDelete} className="text-red-500">
      <TiDeleteOutline size={26} />
    </button>
  )
}

export default RemoveBtn  