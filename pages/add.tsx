import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface BookForm {
  image: string;
  title: string;
  description: string;
}

const AddBook = () => {
  const [book, setBook] = useState<BookForm>({
    image: '',
    title: '',
    description: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('/api/books', book);
      alert('Data berhasil ditambahkan!');
      setBook({ image: '', title: '', description: '' });
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat menambahkan data');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Tambah Data Buku</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-lg font-semibold">
            Gambar
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => {
              const file = event.target.files && event.target.files[0];
              if (file) {
                setBook({ ...book, image: file.name });
              }
              handleInputChange(event);
            }}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-semibold">
            Judul
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleInputChange}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-lg font-semibold">
            Deskripsi
          </label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleInputChange}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-600"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Tambah Data
        </button>        
        <Link href="/">
          <button className="border border-blue-500 py-2 px-4 rounded-md w-full">
            Batal
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AddBook;
