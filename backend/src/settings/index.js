const {Application} = require("express")
const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")

/**
 * 
 * @param {{app:Application}} param0 
 */
module.exports =({ app })=>{
 app.use(express.json ({limit:"100mb"}))
 app.use(express.urlencoded({extended:true}))
 app.use(logger("combined"))
 app.use(helmet ())
 app.use(cors({ origin :"*"}))
 
}