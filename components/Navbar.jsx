import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-100 shadow rounded-b-md px-8 py-8 mt-2">
      <Link href='/' className="text-black font-bold">Todo-List</Link>
      <div className="flex gap-4 items-center">
        <Link href='/completedList' className="p-2 b-2 text-slate-500 rounded-md text-sm font-bold " >Completed tasks</Link>
        <Link href='/addList' className="bg-blue-500 p-2 b-2 text-white rounded-md" >Add List</Link>
      </div>

    </nav>
  )
}

export default Navbar