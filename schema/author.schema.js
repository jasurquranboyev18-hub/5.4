const { Schema, model }  = require("mongoose")

const Author = new Schema({
    full_name:{
        type :String,
        required: [true,"full_name  kiritish shart"],
        unique:false,
        set: value => value.trin().toUpperCase(),
        minLengith:[3,"kamida 3 ta harf bolsin"],
        math:[/^[a-zA-Z]+$/,"faqatharf kiriting"],
        trim:true,
        alias:"ism"
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
        required:true,
        minLengith:[15,"kamida 15 ta harfdan iborat bolsin"]
    },
    bio: {
        type :String,
        required : true,
        minLengith:1000,
        trim:true
    },
    genre: {
        type :String,
        required : true,
        toLowerCase:true,
           enum:{
            values:["historical","Drama "," Horror","Romance","Detictive","documetry","Science fiction","Comedy","Reality","Animation"],
            message:`{VALUES}bunday qiymat qabul qilinmaydi`
        }
    },
     period: {
        type :String,
        required : true,
         toLowerCase:true,
        enum:{
            values:["temuriylay davri","jadid adabiyoti ","savet davri","mustaqilik davri"],
            message:`{VALUES}bunday qiymat qabul qilinmaydi`
        }
    },
    creativity:{
        type:String,
        required:true,
        maxLength:1000
    },
    region:{
        type :String,
        required:true,
        maxLength:50
    },
    phone_number:{
         type :String,
        required:true,
        validate:{
            validator:function(value){
                return /^\+998\d{2}\d{3}\d{2}\d{2}/.test(value)

            },
            message:"telefon raqam formati :+ 99890 000 00 00 shu usulda bolishi kerak"
        }
    }
},
{
    versionKey:false,
    timestamps:true
})






const AuthorSchema = model("Author",Author)
module.exports = AuthorSchema