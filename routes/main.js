const express = require("express")

const router = express.Router()

 router.get("/", (req,res,next) =>{

     const data = {
         title: "House of Coffee"
     }
     res.render("home",data)
 })

module.exports = router