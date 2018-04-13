const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors')

const backend = express()

const EXPRESS_PORT = 1337

// Enable CORS as client is running on a different port on localhost
backend.use(cors())

function randomWait() {
  return Math.floor(Math.random() * 10000) + 500
}

backend.get('/api/users', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    setTimeout(() => {
      res.json(JSON.parse(data))
    }, randomWait())
  })
})

backend.get('/api/user/:id', (req, res) => {
  const userId = req.params.id
  fs.readFile(path.resolve(__dirname, 'users.json'), 'utf8', (err, data) => {
    const users = JSON.parse(data)
    const user = users.find(item => item.id.toString() === userId)
    setTimeout(() => {
      res.json(user)
    }, randomWait())
  })
})

// eslint-disable-next-line no-console
backend.listen(EXPRESS_PORT, () => console.log(`Server is running on http://localhost:${EXPRESS_PORT}/`))
