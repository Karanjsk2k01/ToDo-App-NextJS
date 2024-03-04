import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-100 shadow rounded-b-md px-8 py-8 mt-2">
      <Link href='/' className="text-black font-bold">Todo-List</Link>
      <Link href='/addList' className="bg-blue-500 p-2 b-2 text-white rounded-md" >Add List</Link>
    </nav>
  )
}

export default Navbar