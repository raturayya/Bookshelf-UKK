import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books");
      setBooks(response.data);
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil data");
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Anda yakin ingin menghapus data ini?")) {
      try {
        await axios.delete(`/api/books/${id}`);
        alert("Data berhasil dihapus!");
        fetchBooks();
      } catch (error) {
        console.error(error);
        alert("Terjadi kesalahan saat menghapus data");
      }
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/edit/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState('');

  // filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Daftar Buku</h1>
      {/* Search Bar */}
      <input
          type="text"
          placeholder="Search by Title"
          className="border p-2 rounded-md mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Gambar</th>
            <th className="px-4 py-2">Judul</th>
            <th className="px-4 py-2">Deskripsi</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                <img src={book.image} alt={book.title} className="h-16 w-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.description}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mr-2"
                  onClick={() => handleDelete(book.id)}
                >
                  Hapus
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  onClick={() => handleEdit(book.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
