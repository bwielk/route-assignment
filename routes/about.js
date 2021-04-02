const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/", (req, res) => {
    console.log("Welcome to the main page!")
    res.sendFile(path.join(__dirname, "../", "views", "main.html"))
})

module.exports = router