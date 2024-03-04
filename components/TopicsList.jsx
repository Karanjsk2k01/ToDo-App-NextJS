"use client"
import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilSquare } from "react-icons/hi2";
import { FaFileCircleCheck } from "react-icons/fa6";
import { useState } from "react";

const TopicsList = ({ List }) => {

  const [completedItems, setCompletedItems] = useState([])    
  
  const deleteCompletedList = async (e,id)=>
  {
    e.preventDefault()

    try {
      var res=await fetch(`http://localhost:3000/api/topics?id=${id}`,{method:'DELETE'}
        )

        if (!res.ok)
        {
          throw new Error('Failed to delete')
      }     
      
      setCompletedItems([...completedItems,id])


    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    <>
      {List.map((item) => (
        <div className="py-5 border-slate-300 shadow px-5 flex justify-between gap-5" key={item._id.toString()}>
          <div className="flex items-center hover:ease-linear" onClick={(e) => deleteCompletedList(e, item._id.toString())} >
            <FaFileCircleCheck size={25} className="text-green-500 hover:scale-110 transition duration-300" />
          </div>

          <div className="flex flex-col flex-1">
              <h2 className="font-bold">{item.title}</h2>
              <div>{item.description}</div>
          </div>
          <div className="flex flex-1 gap-5  items-center text-sm text-slate-500">
            <span>{completedItems.includes(item._id.toString()) ? 'Completed' : 'In-Progress'}</span>
          </div>
          
          <div className="flex gap-5 items-center ">
            <span className="text-sm text-slate-400 font-bold">{item.date}</span>

            {completedItems.includes(item._id.toString()) ?
              (<div></div>) :
              (
                <>
                 <RemoveBtn id={item._id.toString()} />
                <Link href={`/editList/${item._id.toString()}`}>
                <HiPencilSquare size={24}/>
                </Link>
                </>
              )
            }

            </div>
          </div>
      ))}

    </>
  )
}

export default TopicsList