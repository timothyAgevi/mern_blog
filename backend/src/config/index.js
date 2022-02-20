const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT

const SECRTET_KEY=process.env.SECRTET_KEY
const DATABASE_URL=process.env.DATABASE_URL

module.exports = Object.freeze({ PORT, SECRTET_KEY})
/**
 * 
 */

