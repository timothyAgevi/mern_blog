const { connect }= require("mongoose")

/**
 * @param {{db_url:string}} param0
 */
module.exports= function ( { db_url}) {
    connect(db_url).then( () => {
        console.log("Database connection sucessful")
    }).catch( err=>{
        console.log(err.message)
    })

}