const express = require("express")
const QuickUrl = require("../models/quickUrl")
const utils = require("../utils")

// Router
const router = express.Router()

// Api routes
router.get("/test", (req, res) => {
    res.json("Quickurl API v1.0.0")
})

router.get("/fetchAll", (req, res) => {
    QuickUrl.find({})
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.error(err)
            return
        })
})

router.post("/shorten", (req, res) => {
    const currentUrl = req.body.url

    // Check if the URL was properly submitted
    if (!currentUrl) {
        res.status(400).json('No URL submitted in the request boby.')
        return
    }

    // Check if the URL is valid
    if (!utils.isValidHttpUrl(currentUrl)) {
        res.status(400).json('Invalid URL submitted (no http protocol).')
    }

    // Check if the current URL already exists else create a new one
    QuickUrl.findOneAndUpdate({url: currentUrl}, {$inc: {attempts: 1 }}, {new: true})
        .then((result) => {
            if (result != null) {
                console.log(result)
                res.status(403).json("The submitted URL is already shortened.")
            } else {
                const quickurl = new QuickUrl({url: currentUrl, attempts: 1})
                quickurl.save()
                    .then((result) => {
                        res.send(result)
                    })
                    .catch((err) => {
                        console.error(err)
                        return 
                    })
            }
        })
        .catch((err) => {
            console.error(err)
            return 
        })
})

module.exports = router