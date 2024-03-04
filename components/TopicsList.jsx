
import Link from "next/link"
import RemoveBtn from "./RemoveBtn"
import { HiPencilSquare } from "react-icons/hi2";

const TopicsList = async () => {
  
  const getTopic = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache:'no-store'
    })
    
    if (!res.ok)
    {
      throw new Error('Failed to fetch topics');
    }
    return res.json();
    
  } catch (error) {
    console.log(error.message)
  }  

  
}
  
const {List} = await getTopic();
  
  return (
    <>
      {List.map((item) => (
          <div className="py-5 border-slate-300 shadow px-5 flex justify-between gap-5" key={item._id.toString()}>
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <div>{item.description}</div>
            </div>
          <div className="flex gap-5 items-center ">
              <span className="text-sm text-slate-400 font-bold">{item.date}</span>
              <RemoveBtn id={item._id.toString()}/>
              <Link href={`/editList/${item._id.toString()}`}>
                <HiPencilSquare size={24}/>
              </Link>
            </div>
          </div>
      ))}

    </>
  )
}

export default TopicsList