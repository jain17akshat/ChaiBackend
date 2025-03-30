const express=require("express")
const app= express()

const port=3000

app.get("/",(req,res)=>{
    res.send("Hello world")
});

app.get("/twitter",(req,res)=>{
    res.send("Akshat.com")
});

app.get("/login",(req,res)=>{
    res.send("<h1>Please Login at yt</h1>")
});


app.listen(port,()=>{
console.log(`Example ${port}`);

})