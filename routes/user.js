

const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router = express.Router();
const multer=require('multer');
const mongoose=require('mongoose');
const usermodel=require('../models/usersmodel');
const productmodel=require('../models/productmodel');
const path=require('path');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

// adding multer middleware for image handling

const storage=multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req,file,cb){
	cb(null,file.originalname);
	}
});


const upload=multer({
	storage:storage
}).single('myImage');



// mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});


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
 router.get('/addproduct',(req,res)=>{
   res.render('addproduct');
   console.log(req.url);
})
 router.get('/admin',(req,res)=>{
   res.render('admin');
})
   //Product upload handle here
router.post('/addproduct',(req,res)=>{


   upload(req,res,(err)=>{
		
      const obj={
         'title' :req.body.title,
         'price':req.body.price,
         'description':req.body.description,
         'image':req.file.originalname

   
      }
   
      mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
      const db=mongoose.connection;
      let products=new productmodel(obj);
      
      products.save().then(()=>{
         console.log("recored saved successfully");
      }).catch(()=>{
         console.log("record not saved");
      })
   
         
           console.log(obj);
           
           res.send(req.file);
           
        
     })





   
   
   


   
   
   

   
})
 

 router.post('/login',(req,res)=>{
   res.send(req.body.email+'   and   '+req.body.pwd);
 
   // mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});
  
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