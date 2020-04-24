 const express=require("express");
 const app=express();
 const bodyParser=require('body-parser');
 const path=require('path');
 const userRoutes=require('./routes/user');
//  use body-parser
 app.use(bodyParser.urlencoded({extended: false}));
//  use public folder for static data using like images/styilng 
app.use(express.static(path.join(__dirname, 'public')));
// set view templating engines
app.set('view engine','pug');

app.set('views','./views');

 app.use(userRoutes);
 app.use('/',(req,res,next)=>{
     res.send("page is not available");
 })
 
 


 
 app.listen(3030,()=>{
     console.log("listening at port 3030");
     
 })