// components/Navbar.tsx

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mx-16">
      <div className="text-2xl font-bold ">myBookshelf</div>
      <div className="flex space-x-4">
      <button className='h-auto w-auto  p-2 rounded-lg'>
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-700 ">Tambah Buku</p>
          </Link>
        </button>
        <button className='h-auto w-20 bg-yellow-300 p-2 rounded-lg'>
          <Link href="/">
            <p className="text-white font-medium">Login</p>
          </Link>
        </button>
        <button className='h-auto w-auto  border-2 border-yellow-300 p-2 rounded-lg'>
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-700 ">Register</p>
          </Link>
        </button>
      </div>
    </nav>
  )
}
