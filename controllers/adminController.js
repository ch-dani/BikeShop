const express=require('express');
const app=express();


exports.dashboard=function(req,res){
    res.send("ehllow dashboard");
}
exports.login=function(req,res){
    res.send("admin logged in");
}