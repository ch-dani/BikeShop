const mongoose= require('mongoose');
const schema= mongoose.Schema;


let usersschema= new schema({
    name:{type:String},
    address:{type:String},
    email:{type:String},
    pwd:{type:String}

 
});

var User=mongoose.model("user",usersschema);

// exports.User;

module.exports = User;
