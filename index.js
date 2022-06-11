const express = require("express")
const router = require("./routes/routes")

require("./database/db")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(3030, () => console.log("Server started on port 3030"))