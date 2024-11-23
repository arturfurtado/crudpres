const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//please create a file connection.js based in the example given in the database folder
const connection = require("./database/connection");
const categories = require("./controllers/categoriesController")

app.set("view engine", "ejs");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render("index")
});

app.use("/categories", categories)


//connections

connection.authenticate()
           .then(() => {
            console.log("Connection established");
        }).catch((error) => {
            console.log(error)
        })

app.listen(8080, (error)=> {
    if(error){
        console.log("error:", error)
    } else {
        console.log("running")
    }
});

