// const express=require('express');
// const app=express();
// const bodyParser=require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const usermodel=require('../models/usersmodel');
if(typeof localStorage==='undefined' || localStorage === null){
    const LocalStorage=require('node-localstorage').LocalStorage;
     localStorage = new LocalStorage('./scratch');
}





exports.user_profile=function(req,res){
    res.send("user_profile page is here");
}

exports.login=function(req,res){
    res.render('login');
}

exports.signup=function(req,res){
    
    res.render('signup');
}
exports.verify=function(req,res){
    res.send("yeah user is same");
}

exports.logout=function(req,res){
    res.send("You are logged out !");
    localStorage.clear();
}


exports.signupData=function(req,res){
    mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
    usermodel.findOne({'email': req.body.email},(err,user)=>{
        if(user){
            res.render('signup',{msg:"User already Exists ! Please Log in"});
        }
        else{
            const user= new usermodel(req.body);
            user.save();
            res.render('signup',{msg:'You are registered successfully !'});
        }
    });
    
}


exports.loginData=function(req,res){
    mongoose.connect('mongodb://localhost:27017/bikeshop',{useNewUrlParser:true,useUnifiedTopology:true});
    usermodel.findOne({ 'email': req.body.email,'pwd':req.body.pwd},(err,user)=>{
        if(!user){
            res.render('login',{msg:"Incorrenct Email or password"});
        }
        else{
            jwt.sign({user}, 'noSecret',(err, token)=>{
                localStorage.setItem('token',token);
             })
            res.redirect('user-profile');
        }
    });
    
}

