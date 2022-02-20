const {Application} = require("express")
const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")
const db = require("../../db")
const {DATABASE_URL}=require(" ./../config")
const { routes } = require("../app")
console.log(DATABASE_URL)
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
 db({ db_url:DATABASE_URL })
routes({ app })
}