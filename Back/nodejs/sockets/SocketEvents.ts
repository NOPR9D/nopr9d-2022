import { Socket } from "socket.io"
import { SocketEngine } from "./SocketEngine"

export class SocketEvents extends SocketEngine {
    public onConnection() {
        this.server.on('connection', (socket: Socket) => {
        })
    }
    public onLogout() {
        this.server.on('connection', (socket: Socket) => {
        })
    }
    public onRoomJoin() {
        this.server.on('connection', (socket: Socket) => {
        })
    }
    public onRoomLeft() {
        this.server.on('connection', (socket: Socket) => {
        })
    }
}