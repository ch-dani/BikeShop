

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

const session=require('express-session');
app.use(session({secret:'ssshhhhh,a secret',saveUninitialized: true,resave: true}));




mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});

router.get('/',(req,res)=>{
    res.render("index");
    
 })


 router.get('/login',(req,res)=>{
    res.render("login");
 })


 


 router.get('/signup',(req,res)=>{
    res.render("signup");
 })

 router.get('/products',(req,res)=>{
    const prod=[
      {
         title:'productsA',
         desp:'the best prducts2',
         price:'454858',
         addre:'../Assets/Images/slide3.3b069.png'
      },
      {
         title:'productsA',
         desp:'the best prducts3',
         price:'454858',
         addre:'../Assets/Images/slide3.3b069.png'
      },
      {
         title:'productsA',
         desp:'the best prducts4',
         price:'454858',
         addre:'../Assets/Images/slide3.3b069.png'
      }

    ]
   res.render("products",{prod:prod});

})


 router.get('/user-profile',(req,res)=>{
    res.send("User profile NOT AVAILABLE YES");
 })
 

 router.post('/login',(req,res)=>{
   res.send(req.body.email+'   and   '+req.body.pwd);
 
   mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});
  
   var db = mongoose.connection;
  

   var TheRslt=usermodel.find({ 'email': req.body.email,'pwd':req.body.pwd});
   // TheRslt.select('name address');
   TheRslt.limit(3);
   
  
   
   TheRslt.exec((err,athlete)=>{
      if(err) throw err;
      console.log(athlete[0].name);
   })

   
  
})
  





router.post('/Signup',(req,res)=>{
   
   
   let usera=new usermodel(req.body);
   
   console.log(usera);
   
   usera.save().then((req,res)=>{
      console.log("its ok");
      res.send("hellow world!");
   }).catch((req,res)=>{
      console.log("NOT OK")
   });
   res.redirect('/');
   


  
   
});

 

 module.exports=router;
//  exports.userRouting = router;