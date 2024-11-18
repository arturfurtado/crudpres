const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extendes: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("index")
});

app.listen(8080, (error)=> {
    if(error){
        console.log("error:", error)
    } else {
        console.log("running")
    }
});