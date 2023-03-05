import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/edit">
          <p className="text-2xl font-bold">My Bookshelf</p>
        </Link>
        <Link href="/add">
          <p className="bg-blue-600 py-2 px-4 rounded-md text-white">Add Book</p>
        </Link>
      </div>
    </nav>
)}
