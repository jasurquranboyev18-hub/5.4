const AuthorSchema = require("../schema/author.schema");

const getAllAuthor = async(req,res ) => {
    try {
        const author = await AuthorSchema.find()
        res.status(200).json(author)
    } catch (error) {
        console.log(erorr.message);
        
    }
}

const addAuthor = async(req,res ) => {
    try {
        const {full_name,birth_year, death_year,image_url,bio,creativity,region}= req.body

        await AuthorSchema.create({full_name,birth_year, death_year,image_url,bio,creativity,region})
        res.status(201).json({
            message:"Added author"
        })
    } catch (error) {
        console.log(erorr.message);
        
    }
}


module.exports ={
    getAllAuthor,
    addAuthor
}

