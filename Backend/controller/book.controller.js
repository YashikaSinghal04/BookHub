import Book from "../model/book.model.js";
export const getBook = async (req, res) => {
  try {
    console.log("Fetching books...");
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error in getBook:", error);
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
};