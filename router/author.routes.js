const { Router } = require("express")
const { getAllAuthor, addAuthor } = require("../controller/author.controller")
const authorRouter = Router()


authorRouter.get("/get_all_author",getAllAuthor)
authorRouter.post("/add_author",addAuthor)

module.exports = authorRouter