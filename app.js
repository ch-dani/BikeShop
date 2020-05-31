const jwt=require('jsonwebtoken');
const express=require("express");
const app=express();
const bodyParser=require('body-parser');
const path=require('path');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');
app.set('views','./views');
const adminRoutes=require('./routes/adminRoute');
const bikeshopRoutes=require('./routes/bikeshopRoutes');
const userRoutes=require('./routes/userRoutes');

app.use('/bikeshop', bikeshopRoutes);
app.use('/bikeshop/admin',adminRoutes);
app.use('/bikeshop/user/',userRoutes);

app.get('/',(req,res,next)=>{

     res.send("page is not availableK");
    
    
 })

//  async function generateToken(){
//     var token =await jwt.sign({ foo: 'bar' }, "privateKey");
//     console.log(token);
 
//  }
//  generateToken();
 
 


 
 app.listen(3030,()=>{
     console.log("listening at port 3030");
     
 })