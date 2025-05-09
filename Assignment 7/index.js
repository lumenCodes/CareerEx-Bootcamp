const express = require("express")
const env = require("dotenv")
const mongoose  = require("mongoose")



const app = express()
env.config()



app.use(express.json())

const port = process.env.PORT || 7890
const DB = process.env.DBSTRING



mongoose.connect(DB)
    .then(() => {
        console.log("Mongo DB connected Successfuly")

        app.listen(port, () => {
    
            console.log('Server running on ' + port)
        })
    })

