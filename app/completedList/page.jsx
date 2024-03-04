"use client"

const CompletedTask = async () => {
  
  
  const getList = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/completed/', {
      cache:'no-store'
    })
    
    if (!res.ok)
    {
      throw new Error('Failed to fetch topics');
    }
    const List = await res.json();

    return List;
    
  } catch (error) {
    console.log(error.message)
  }  
  }
  
  const deleteHandler = async (e) => {
    e.preventDefault()
    
    try {
      const res = await fetch('http://localhost:3000/api/completed/', {
      method:'DELETE'
      })
      if (!res.ok)
      {
        throw new Error('Failed to fetch topics');
        return;
      }
      
      window.location.reload()
      
    } catch (error) {
      console.log(error.message)
    }
  }

  const { List } = await getList();

  return (
    <div>
      <button onClick={deleteHandler} className="bg-red-500 p-2 b-2 text-white rounded-md" >Delete All</button>
      {List.length >0 && List.map((item) => (
        <div key={item._id} className="py-5 my-2 border-slate-300 shadow px-5 flex justify-between gap-5">
          <div className="flex flex-col flex-1">
            <h2 className="font-bold">{item.title}</h2>
            <div>{item.description}</div>
          </div>
          <div className="flex flex-1 gap-5  items-center text-sm text-slate-500">
            <span>Completed</span>
          </div>
          <div className="flex gap-5 items-center ">
            <span className="text-sm text-slate-400 font-bold">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CompletedTask