const express=require("express");
const cors=require("cors");
const port = process.env.PORT || 3000;
const app=express();


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 };

 app.use(cors(corsOptions)); // Use this after the variable declaration

var lat=17.3850;
var lng=78.4867;


app.get("/hello",function(req,res){
    console.log("request");
if(req.query.lat!=undefined&&req.query.lng!=undefined){
    console.log(req.query.lat +","+ req.query.lng);
    lat=req.query.lat;
    lng=req.query.lng;
   
res.status(200).send("");


}
else{
    res.status(200).send("");
}

    // res.send(req.query.id);

});


app.get("/getlats",function(req,res){

   try{
    res.send({
        "lat":lat,
        "lng":lng
    })
   }
   catch(e){}
   
  



})

app.listen(port);