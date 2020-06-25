const express=require('express');
const app=express();
const mongoose=require('mongoose');
const usermodel=require('../models/usersmodel');
const productmodel=require('../models/productmodel');


    

exports.deleteMyFiles=function(req,res){
    console.log("helloow world");
    res.send("great ! delete files");
}
exports.home=async (req,res)=>{
    console.log(req.url);
    mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
    const db=mongoose.connection;
    
    let products= await productmodel.find().limit(3);
    
    // console.log(products);
 
    //  res.render("products",{prod:products});
    res.render("index",{prod:products});
     
}

exports.products= async(req,res)=>{

    mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
    const db=mongoose.connection;
    
    const products= await productmodel.find();
    // console.log(products);
 
     res.render("products",{prod:products});
 
}

exports.login=function (req,res){
    res.render("login");
}

exports.signup= function (req,res){
    res.render("signup");
}

exports.user_profile= function (req,res){
    res.send("User profile NOT AVAILABLE YES");
}
 
exports.addproduct =function (req,res){
    // res.render('addproduct');
    console.log(req.url);
    res.end("products added !! DANI");
}

exports.admin=function(req,res){
    res.end("Hello Admin !!");
    // res.render('admin');
}
exports.logout=function(req,res){
    localStorage.clear('token');
    res.redirect("/bikeshop/user/login");
}



//...