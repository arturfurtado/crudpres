const express = require('express')
const router = express.Router()

function TimeLog(req, res, next){
    let seconds = new Date().getTime() / 1000;
    console.log("Time: ", seconds)
    next()
}
router.use(TimeLog)

router.get("/", (req,res)=>{
    res.send("teste categoria sucesso")
})

module.exports = router