const { createServer}= require( "http")

const {Application}=require ("express") //app interface
const {PORT}=require("../config")

/**
 * 
 * @param {{ app:Application}} param0 
 */

module.exports = function( {app}){
 const server= createServer(app)
 server.listen(PORT,()=>{
     console.log(`Server running on http://localhost:${ PORT }`)
 })
}