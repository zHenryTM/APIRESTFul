const mongoose = require("mongoose")

async function startDB() {
    try {
        await mongoose.connect("mongodb://localhost/apirestfulDB")
        console.log("Connected successfully to database!")
    } catch(err) {
        console.log("Error connecting to database..." + err)
    }
}

startDB()
