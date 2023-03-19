// components/Navbar.tsx

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mx-16">
      <div className="text-2xl font-bold text-blue-500">myBookshelf</div>
      <div className="flex space-x-4">
        <button className='h-auto w-20 bg-blue-500 hover:bg-blue-600 p-2 rounded-lg'>
          <Link href="/login">
            <p className="text-white font-medium">Login</p>
          </Link>
        </button>
        <button className='h-auto w-28  border-2 border-blue-500 hover:border-white p-2 rounded-lg'>
          <Link href="/register">
            <p className="text-gray-700 hover:text-blue-600 hover:font-medium ">Register</p>
          </Link>
        </button>
      </div>
    </nav>
  )
}
