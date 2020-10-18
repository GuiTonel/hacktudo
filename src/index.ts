import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import socketio from 'socket.io'
import http from 'http'

import routes from './routes'

const app = express()

let port = process.env.PORT || 3333;

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://hacktudo:hacktudo@cluster0.qv0zr.mongodb.net/Cluster0?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true  } )

app.use(routes)

app.get('/', (req, res)=>{
  res.send('hellp')
})

const server = http.createServer(app)
const io = socketio(server)

io.on("connection", socket => {
  console.log(socket.id)
})

server.listen(port, () => {
  console.log('Server running')
})
