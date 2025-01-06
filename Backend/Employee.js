const mongoose =require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email: String,
    password:String,
    contact:Number,
    age:Number
})

const Employee =mongoose.model("employee",EmployeeSchema)
module.exports =Employee