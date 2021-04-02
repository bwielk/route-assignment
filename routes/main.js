const express = require('express')
const path = require('path')
const router = express.Router()

router.get("/about", (req, res) => {
    console.log("Welcome to the about page")
    res.sendFile(path.join(__dirname, "../", "views", "about.html"))
})

module.exports = router