import Head from 'next/head';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { Book }  from '../models/book';
import Navbar from '../components/Navbar';

interface HomeProps {
  books: Book[];
}

export default function Home({ books }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>My Bookshelf</title>
        <meta name="description" content="A simple bookshelf app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-4">
        <h1 className="text-4xl font-bold mb-4">My Bookshelf</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by Title"
          className="border p-2 rounded-md mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Books Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-md p-4">
              <img src={book.image} alt={book.title} className="mb-2" />
              <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-600">{book.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// fetch data from API
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const books: Book[] = await res.json();

  return {
    props: { books },
  };
};
