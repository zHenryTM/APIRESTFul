const mongoose = require("mongoose")
const Schema = mongoose.Schema

async function startDB() {
    try {
        await mongoose.connect("mongodb://localost/apirestfulDB")
        console.log("Connected successfully to database!")
    } catch(err) {
        console.log("Error connecting to database..." + err)
    }
}

module.exports = startDB
