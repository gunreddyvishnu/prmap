const express=require("express");

const port = process.env.PORT || 3000;
const app=express();

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