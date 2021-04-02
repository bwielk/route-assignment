const http = require('http')
const path = require('path')

const express = require('express')
const bodyParse = require('body-parser')

const mainPageRoute = require('./routes/main')
const aboutPageRoute = require('./routes/about')

const app = express()

app.use(mainPageRoute)
app.use(aboutPageRoute)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "error.html"))
})

app.listen(3123)