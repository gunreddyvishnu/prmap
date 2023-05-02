const express=require("express");

const port = process.env.PORT || 3000;
const app=express();


app.get("/hello",function(req,res){
    console.log("request");
if(req.query.lat!=undefined&&req.query.lng!=undefined){
    console.log(req.query.lat +","+ req.query.lng);
   
res.status(200).send("");


}
else{
    res.status(200).send("");
}

    // res.send(req.query.id);

})


app.listen(port);