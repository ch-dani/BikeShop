const mongoose= require('mongoose');
const schema= mongoose.Schema;


let productschema= new schema({
    title:{type:String},
    price:{type:String},
    description:{type:String},
    image:{type:String}

 
});

var Products=mongoose.model("product",productschema);

// exports.User;

module.exports = Products;
