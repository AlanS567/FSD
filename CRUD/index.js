var express = require("express");
require('./connection');

var sampleModel=require('./model')
var app = express();
app.use(express.json());

app.post('/add',async(req,res)=>{
    try{
        await sampleModel(req.body).save()
        res.send({message:"data added"})
    }catch(error){
        console.log(error);
    }
})

//api to view data

/*app.get("/view",async(req,res)=>{
    res.send(output);
})
*/
//api to delete

app.delete("/remove/:a",async(req,res)=>{
    console.log(req.params.a)
    try{
        var id=req.params.a
        await sampleModel.findByIdDelete(id)
        res.send("data deleted")
    }
    catch(error){
        console.log(error)
    }
})
//api to update
app.put('/edit/:id',async(req,res)=>{
    try{
        var id=req.params.id
        var output=await sampleModel.findByIdAndUpdate(id,req.body)
        res.send({message:"updated",output})
    }
    catch(error){
        console.log(error)
    }
})


//app.





app.listen('3001',()=>{
    console.log("port is up and running!")

})