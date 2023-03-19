import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
}

const EditBook = () => {
  const [books, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchBook(Number(id));
    }
  }, [id]);

  const fetchBook = async (id: number) => {
    try {
      const response = await axios.get(`/api/books?id=${id}`);
      setBook(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      alert(`Terjadi kesalahan saat mengambil data`);
    }
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
  
    const searchParams = new URLSearchParams();
    for (const pair of data.entries()) {
      if (typeof pair[1] === 'string') {
        searchParams.append(pair[0], pair[1]);
      }
    }
    
  
    try {
      await axios.put(`/api/books?id=${id}`, searchParams);
      alert("Data berhasil diubah!");
      router.push("/booklist");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menyimpan data");
    }
  };
  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!books) {
    return <p>Data tidak ditemukan</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Edit Buku</h1>
      <form onSubmit={handleSave}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Gambar</label>
          <input
            type="text"
            name="image"
            defaultValue={books.image}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Judul</label>
          <input
            type="text"
            name="title"
            defaultValue={books.title}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Deskripsi</label>
          <textarea
            name="description"
            defaultValue={books.description}
            className="border rounded-md px-4 py-2 w-full h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
        >
          Simpan
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          onClick={() => router.push("/")}
        >
          Batal
        </button>
      </form>
    </div>
  );
};

export default EditBook;