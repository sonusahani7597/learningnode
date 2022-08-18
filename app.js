let express = require("express");
let app = express();

app.get("/home", (req,res)=>{
    console.log("Heloo");
    res.send("Welcome to NodeJS");
})
app.post("/add", (req,res)=>{
    console.log("this is post method");
    res.send("Post Method");
})

app.delete("/abc", (req,res)=>{
    res.send("this is delete method");
})

app.listen(8080,function (req,res) {
    console.log("listenting to port");
})
