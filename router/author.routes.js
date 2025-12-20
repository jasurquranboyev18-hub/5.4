const { Router } = require("express")
const { getAllAuthor, addAuthor, getOneAuthor, updateAuthor } = require("../controller/author.controller")
const authorRouter = Router()


authorRouter.get("/get_all_author",getAllAuthor)
authorRouter.post("/add_author",addAuthor)
authorRouter.get("/get_one_author/:id",getOneAuthor)
authorRouter.put("/update_author/:id",updateAuthor)
authorRouter.delete("/delete_author/:id",deleteAuthor)

module.exports = authorRouter