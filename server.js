const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '69ec298630324c8192e8d7b67ab734cf',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4400

app.listen(port, () => console.log(`server up on ${port}.`))

