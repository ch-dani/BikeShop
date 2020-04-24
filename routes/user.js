const express=require('express');

const bodyParser=require('body-parser');
const router = express.Router();



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


 module.exports=router;
//  exports.userRouting = router;