var mongoose=require("mongoose");






//schema creation
var schema=mongoose.Schema({        
    sname:String,
    age:Number,
    place:String

})


var crudModel=mongoose.model("sample",schema)

module.exports=crudModel