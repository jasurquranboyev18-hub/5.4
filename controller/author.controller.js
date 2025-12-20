const AuthorSchema = require("../schema/author.schema");

const getAllAuthor = async (req, res) => {
  try {
    const author = await AuthorSchema.find();
    res.status(200).json(author);
  } catch (error) {
    console.log(erorr.message);
  }
};

const addAuthor = async (req, res) => {
  try {
    const {
      full_name,
      birth_year,
      death_year,
      image_url,
      bio,
      creativity,
      region,
    } = req.body;

    await AuthorSchema.create({
      full_name,
      birth_year,
      death_year,
      image_url,
      bio,
      creativity,
      region,
    });
    res.status(201).json({
      message: "Added author",
    });
  } catch (error) {
    console.log(erorr.message);
  }
};

const getOneAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await AuthorSchema.findById(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.status(200).json(author);
  } catch (error) {
    console.log(erorr.message);
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      full_name,
      birth_year,
      death_year,
      image_url,
      bio,
      creativity,
      region,
    } = req.body;
    const author = await AuthorSchema.findById(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    await AuthorSchema.findByIdAndUpdate(id, {
      full_name,
      birth_year,
      death_year,
      image_url,
      bio,
      creativity,
      region,
    });

    res.status(200).json({ message: "Author updete" });
  } catch (error) {
    console.log(erorr.message);
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const {id} = req.params;
    const author = await AuthorSchema.findById(id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    await AuthorSchema.findByIdAndDelete(id);

    res.status(200).json({ message: "Author delete" });
  } catch (error) {
    console.log(erorr.message);
  }
};

module.exports = {
  getAllAuthor,
  addAuthor,
  getOneAuthor,
  updateAuthor,
  deleteAuthor
};
