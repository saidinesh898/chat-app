const express = require('express')
const http = require("http")
const path = require('path')
const socketio  = require('socket.io')


const public = path.join(__dirname,'../public')

const app = express()
const server = http.createServer(app)
const io = socketio(server)


app.use(express.static(public))



const port = process.env.PORT || 80


app.get('', (req, res) => {
    res.render('./index.html')
})
let count = 0 

io.on('connection', (socket)=>{
    console.log('New Web socket connection')
    socket.emit('countUpdated', count)
    socket.on('increment', ()=>{
        count++
       io.emit('countUpdated', count)
    })
})

server.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})