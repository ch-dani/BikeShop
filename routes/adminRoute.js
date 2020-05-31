




// // const jwt=require('jsonwebtoken');
// // console.log('came here yeah');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router = express.Router();
// const multer=require('multer');
// const mongoose=require('mongoose');
// const usermodel=require('../models/usersmodel');
// const productmodel=require('../models/productmodel');
// const path=require('path');

// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
// // const bikeshopController=require('../controllers/bikeshopController');
const adminController=require('../controllers/adminController');
// // router.get('/bikeshop/admin/dashboard',adminController.dashboard);
// // app.use(bikeshopController);

// // adding multer middleware for image handling

// const storage=multer.diskStorage({
// 	destination: './public/uploads/',
// 	filename: function(req,file,cb){
// 	cb(null,file.originalname);
// 	}
// });


// const upload=multer({
// 	storage:storage
// }).single('myImage');

// // router.get('/home',bikeshopController.home);
// // router.get('/products',bikeshopController.products);


// //  router.get('/hello',bikeshopController.deleteMyFiles);
// //  router.get('/login',bikeshopController.login);


 


// //  router.get('/signup',bikeshopController.signup);

 


// // router.get('/user-profile',bikeshopController.user_profile);
// // router.get('/addproduct',bikeshopController.addproduct);
// // router.get('/admin',bikeshopController.admin);




//  //Product upload handle here
// // router.post('/addproduct',(req,res)=>{


// //    upload(req,res,(err)=>{
		
// //       const obj={
// //          'title' :req.body.title,
// //          'price':req.body.price,
// //          'description':req.body.description,
// //          'image':req.file.originalname

   
// //       }
   
// //       mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
// //       const db=mongoose.connection;
// //       let products=new productmodel(obj);      

// //       products.save().then(()=>{
// //          console.log("recored saved successfully");
// //       }).catch(()=>{
// //          console.log("record not saved");
// //       })
   
         
// //            console.log(obj);
// //      })
// //         })
 

// //  router.post('/login',(req,res)=>{
// //    res.send(req.body.email+'   and   '+req.body.pwd);
 
// //    // mongoose.connect('mongodb://localhost:27017/dbName',{useNewUrlParser:true,useUnifiedTopology:true});
  
// //    var db = mongoose.connection;
  

// //    var TheRslt=usermodel.find({ 'email': req.body.email,'pwd':req.body.pwd});
// //    // TheRslt.select('name address');
// //    TheRslt.limit(3);
   
  
   
// //    TheRslt.exec((err,athlete)=>{
// //       if(err) throw err;
// //       console.log(athlete[0].name);
// //    })

   
  
// // })
  





// // router.post('/Signup',(req,res)=>{
   
   
// //    let usera=new usermodel(req.body);
   
// //    console.log(usera);
   
// //    usera.save().then((req,res)=>{
// //       console.log("its ok");
// //       res.send("hellow world!");
// //    }).catch((req,res)=>{
// //       console.log("NOT OK")
// //    });
// //    res.redirect('/');
   


  
   
// // });

 
router.get('/dashboard',adminController.dashboard);
router.get('/login',adminController.login);
 module.exports=router;
