const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const authorRouter = require("./router/author.routes");
const BookRouter = require("./router/book.routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

connectDB();

//router
app.use(authorRouter);
app.use(BookRouter);

app.listen(PORT, () => {
  console.log("ishladi" + PORT);
});
