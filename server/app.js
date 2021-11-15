const express = require("express")
const mongoose = require("mongoose")
const constants = require("./config/constants")
const apiRouter = require("./routes/api")
const redirectRouter = require("./routes/redirect")

// App
const app = express()
app.use(express.json())

// Connect to mongodb 
mongoose.connect("mongodb://localhost:27017/quickurl", { useNewUrlParser: true, useUnifiedTopology: true})    // TODO: ENV VAR 
    .then((result) => console.log("MongoDB: Connected to the database"))
    .catch((err) => console.error(err))

// Routes
app.use("/api", apiRouter)
app.use("/", redirectRouter)

// Listening
app.listen(constants.port, () => {
    console.log(`API: Listening at http://localhost:${constants.port}`)
})