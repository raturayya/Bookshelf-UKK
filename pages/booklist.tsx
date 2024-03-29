import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar2";

interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
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
        await axios.delete(`/api/books?id=${id}`);
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
      <div className="flex justify-between items-center mb-8 mx-16">
        <input
          type="text"
          placeholder="Cari judul buku"
          className="border rounded-md px-4 py-2 w-full focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-16 mb-16">
        {filteredBooks.map((book) => (
        <div key={book.id} className="bg-white rounded-md p-4 border border-blue-500">
          {book.image && (
            <img src={book.image} alt={book.title} />
          )}
          <h2 className="text-lg font-semibold mb-2 mt-4">{book.title}</h2>
          <p className="text-gray-600" style={{overflowWrap: 'break-word'}}>{book.description}</p>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
              onClick={() => handleEdit(book.id)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              onClick={() => handleDelete(book.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default BookList;
