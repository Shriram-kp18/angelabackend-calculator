const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true})); //for html posting urlencoded is used..differnet for differnet posting...
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");//dirname is used because if it is in server it will open file.html sendFile for sending whole file...
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1); //without number its just text , to change it to number for calculation we use Number
  var num2=Number(req.body.num2); //for weight its float we can use parseFloat
  var result=num1 +num2;
  res.send("the result :"+result);
});
app.listen(3000,function(){
  console.log("server running 3000");
});
