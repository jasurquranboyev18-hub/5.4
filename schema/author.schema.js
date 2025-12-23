const { Schema, model }  = require("mongoose")

const Author = new Schema({
    full_name:{
        type :String,
        required: [true,"full_name  kiritish shart"],
        unique:[false,"full_name uiniq bolishi kere"]
    },
    birth_year:{
        type:Number,
        required:true,
        max:[new Date().getFullYear()-15,"adib kami 15 yosh bolishi kere"],
        min:0
    },
    death_year:{
        type:String,
        required:false,
        default:null
    },
    image_url:{
        type:String,
        required:true
    },
    bio: {
        type :String,
        required : true
    },
    genre: {
        type :String,
        required : true
    },
     period: {
        type :String,
        required : true
    },
    creativity:{
        type:String,
        required:true
    },
    region:{
        type :String,
        required:true
    }
},
{
    versionKey:false,
    timestamps:true
})






const AuthorSchema = model("Author",Author)
module.exports = AuthorSchema