const express1 = require('express');
const app = express1();
const mongoose = require('mongoose');
 const Employee = require('./Employee')
 const Donar = require('./Donar')
const cors =require('cors')
mongoose.connect('mongodb+srv://purvagorde2004:Purva%4004@fundraser.95rh3.mongodb.net/fundraser')
.then(()=> console.log('Database is connected'))

app.use(express1.json());

const port = 3001;

app.use(express1.json())
app.use(cors());
 
app.post('/login',(req,res) =>{
  const {email,password }= req.body;
  Employee.findOne({email:email})
  .then(user =>{
    if(user){
      if(user.password===password){
        res.json("Success")

      }else{
        res.json("Password is incorrect")
      }

    }else{
      res.json("no record exited")
    }
  })
})


app.post('/register',(req,res) =>{
  Employee.create(req.body)
  .then(employee =>res.json(employee))
  .catch(err =>res.json(err))
})

app.post('/form',(req,res)=>{
  Donar.create(req.body)
  .then(donar =>res.json(donar))
  .catch(err =>res.json(err))
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});