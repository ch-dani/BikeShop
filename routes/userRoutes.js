const express=require('express');
const app=express();
const router = express.Router();
const userController=require('../controllers/userController');
const jwt=require('jsonwebtoken');
if(typeof localStorage==='undefined' || localStorage === null){
    const LocalStorage=require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
router.get('/user-profile',verifyToken,userController.user_profile);
router.get('/login',userController.login);
router.get('/signup',userController.signup);
router.post('/login',userController.loginData);
router.post('/signup',userController.signupData);
router.get('/logout',userController.logout);



function verifyToken(req,res,next){
    const bearerHeader=localStorage.getItem('token');
    if(typeof bearerHeader!='undefined'){
        jwt.verify(bearerHeader,'noSecret',(err,authData)=>{
            
            if(err){
                res.render('login',{msg:'You need to log in First'});
    
            }
            else{
                next();
            }
        })
    }
    else{
        //forbidden
        console.log("fn else part");
        res.sendStatus(403);
        
    }
}


module.exports=router;