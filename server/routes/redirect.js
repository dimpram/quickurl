const express = require("express")
const QuickUrl = require("../models/quickUrl")

// Router
const router = express.Router()

router.get("/:shortId", (req, res) => {
    const param = req.params.shortId

    QuickUrl.findOneAndUpdate({shortId: param}, {$inc: {visits: 1 }}, {new: true})
        .then((result) => {
            if (result == null) {
                res.sendStatus(404)
            }
            res.redirect(result.url)
        })
        .catch((err) => {
            console.error(err)
            return
        })
})

module.exports = router