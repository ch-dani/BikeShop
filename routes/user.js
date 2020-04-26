

const express=require('express');
const app=express();
app.use(express.urlencoded({ extended: false }));
const bodyParser=require('body-parser');
const router = express.Router();
const multer=require('multer');
var upload=multer();
app.use(upload.array());
const mongoose=require('mongoose');
const usermodel=require('../models/usersmodel');
app.use(bodyParser.json());

router.get('/',(req,res)=>{
    res.render("index");
    
 })


 router.get('/login',(req,res)=>{
    res.render("login");
 })
 router.get('/products',(req,res)=>{
    res.send("PROducts are not available yet")
 })
 router.get('/signup',(req,res)=>{
    res.render("signup");
 })
 router.get('/user-profile',(req,res)=>{
    res.send("User profile NOT AVAILABLE YES");
 })

 router.post('/login',(req,res)=>{
   res.send(req.body.email+'   and   '+req.body.pwd);
   console.log(req.body.email);
   console.log(req.body.pwd);
})



router.post('/Signup',(req,res)=>{
   
   
   let usera=new usermodel(req.body);
   
   console.log(usera);
   mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});
   usera.save().then().catch();
   res.redirect('/');
  


  
   
});

 

 module.exports=router;
//  exports.userRouting = router;