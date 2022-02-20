const {Application} = require("express")
// const express = require("express")
// const cors = require("cors")
// const logger = require("morgan")
// const helmet = require("helmet")

/**
 * 
 * @param {{app:Application}} param0 
 */
module.exports =({ app })=>{
   app.get("/", (req,res) =>{
       return res.json({ message: "Sucess"})
   })
}