// components/Navbar.tsx

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 mx-16">
      <div className="text-2xl font-bold text-blue-500">myBookshelf</div>
      <div className="flex space-x-4">
      <button className='h-auto w-auto  p-2 rounded-lg'>
          <Link href="/add">
            <p className="text-blue-500 hover:text-blue-600 hover:font-semibold">Tambah Buku</p>
          </Link>
        </button>
      </div>
    </nav>
  )
}
