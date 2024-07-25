const express =require("express");

const PORT=8000;

//init app
const app = express();

//view engine
app.set("viewengine","ejs");    

//listen server 

app.listen(PORT ,()=>{
    console.log(`serevr is runing sucesss fully on port ${PORT}`);
});