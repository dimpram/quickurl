const express = require("express")

// Constants
const port = process.env.PORT || 5000

// App
const app = express()

// Middleware
app.use(express.json())

// Routes
app.get("/", (req, res) => {
    res.send("Hello world!")
})

// Listening
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
})