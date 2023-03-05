import { NextApiRequest, NextApiResponse } from 'next';
import { getBooks, createBook, updateBook, deleteBook, Book } from '../../../models/book';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const books = await getBooks();
    res.status(200).json(books);
  } else if (req.method === 'POST') {
    const book = req.body as Book;
    await createBook(book);
    res.status(201).json("Data created successfully");
  } else if (req.method === 'PUT') {
    const books = req.body as Book;
    const { id } = req.query;
    await updateBook(Number(id), books);
    res.status(200).json("Data updated successfully");
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    await deleteBook(Number(id));
    res.status(200).json("Data deleted successfully");
  } else {
    res.status(405).json("Method Not Allowed");
  }
}
