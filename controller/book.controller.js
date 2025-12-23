const BookSchema = require("../schema/book.schema")

const getAllBooks = async (req, res) => {
  try {
    const books = await BookSchema.find();
    res.status(200).json(books);
  } catch (error) {
    console.log(erorr.message);
  }
};

const addBook = async (req, res) => {
  try {
    const {
     title,
     pages,
      image_url,
      published_home,
      published_year,
      description,
      genre,
      period
    } = req.body;

    await BookSchema.create({
      title,
     pages,
      image_url,
      published_home,
      published_year,
      description,
      genre,
      period});
    res.status(201).json({
      message: "Added Book",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const Book = await BookSchema.findById(id);

    if (!Book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.status(200).json(Book);
  } catch (error) {
    console.log(erorr.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {
    title,
     pages,
      image_url,
      published_home,
      published_year,
      description,
      genre,
      period
    } = req.body;
    const Book = await BookSchema.findById(id);

    if (!Book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    await BookSchema.findByIdAndUpdate(id, {
     title,
     pages,
      image_url,
      published_home,
      published_year,
      description,
      genre,
      period,
    });

    res.status(200).json({ message: "Book updete" });
  } catch (error) {
    console.log(erorr.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const {id} = req.params;
    const Book = await BookSchema.findById(id);

    if (!Book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    await BookSchema.findByIdAndDelete(id);

    res.status(200).json({ message: "Book delete" });
  } catch (error) {
    console.log(erorr.message);
  }
};

module.exports = {
  getAllBooks,
  addBook,
  getOneBook,
  updateBook,
  deleteBook
};
