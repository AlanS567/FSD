var mongoose=require('mongoose');


//mongoose.connect("connection string").then().catch()
mongoose.connect("mongodb+srv://Alan:alan@cluster0.rnatsd2.mongodb.net/crudbatch?retryWrites=true&w=majority&appName=Cluster0"
)
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log(err)
})