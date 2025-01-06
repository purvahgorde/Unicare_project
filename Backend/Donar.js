const mongoose =require('mongoose')

const DonarSchema = new mongoose.Schema({
     purpose:String,
    name:String,
    email: String,
    password:String,
   mobile:Number,
   amount:Number
    
})

const Donar =mongoose.model("donar",DonarSchema)
module.exports =Donar