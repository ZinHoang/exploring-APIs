const express = require('express')
const path = require('path')
const server = express()
const request = require('superagent')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.get('/api/quote', async (req, res) => {
  try {
    const quoteResp = await request.get('https://www.affirmations.dev/')
    res.json(quoteResp.body)
  } catch (err) {
    console.log('Err message: ' + err)
  }
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
