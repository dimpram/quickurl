require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const apiRouter = require("./routes/api")
const redirectRouter = require("./routes/redirect")

// App
const app = express()
app.use(express.json())

// Connect to mongodb 
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true})    // TODO: ENV VAR 
    .then((result) => console.log("MongoDB: Connected to the database"))
    .catch((err) => console.error(err))

// Routes
app.use("/api", apiRouter)
app.use("/", redirectRouter)

// Listening
app.listen(process.env.PORT, () => {
    console.log(`API: Listening at ${process.env.HOST}:${process.env.PORT}`)
})