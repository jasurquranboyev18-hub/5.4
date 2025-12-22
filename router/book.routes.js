const { Router } = require("express")
const { getAllBooks, addBook, getOneBook, updateBook, deleteBook } =require("../controller/book.controller");

const BookRouter = Router()


BookRouter.get("/get_all_Books",getAllBooks)
BookRouter.post("/add_Book",addBook)
BookRouter.get("/get_one_Book/:id",getOneBook)
BookRouter.put("/update_Book/:id",updateBook)
BookRouter.delete("/delete_Book/:id",deleteBook)

module.exports = BookRouter