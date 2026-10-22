import http from 'http'
import { Server } from 'socket.io'
const server = http.createServer()
import {v4 as uuid} from 'uuid'
import dotenv from 'dotenv'
dotenv.config()


const io = new Server (server, {
    cors: {
        origin: '*',
    }
})

const waitingQueue = []

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

io.on('connection', (socket) => {
    console.log(socket.id, 'connected')

    if (waitingQueue.includes(socket.id))return
    socket.on("start",() => {
        if(waitingQueue.length > 0){
            const partner = waitingQueue.shift()
            const roomId = uuidv4()
            activepairs.set(socket.id, partner)
            activepairs.set(partner, socket.id)
            socket.emit("matched",{roomId})
            socket.to(partner).emit("matched",{roomId})
        } else {
            waitingQueue.push(socket.id);
        }
    })
})

export default server