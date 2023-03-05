import { NextApiRequest, NextApiResponse } from "next";
import { getBooks, createBook, updateBook, deleteBook, Book } from "../../../models/book"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "PUT") {
    const id = Number(req.query.id);
    const { image, title, description } = req.body;
    const bookList = await getBooks();
    const index = bookList.findIndex((book: { id: number; }) => book.id === id);

    if (index === -1) {
      res.status(404).json({ message: `Buku dengan ID ${id} tidak ditemukan` });
      return;
    }

    const book = { id, image, title, description };
    bookList[index] = book;

    await updateBook(id, book);

    res.status(200).json(book);
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).json({ message: `Method ${req.method} tidak diizinkan` });
  }
}
