import { SocketActions, SocketEvents, SocketManager } from ".";
import { SocketEngine } from "./SocketEngine";
import io, { Socket as _Socket } from 'socket.io'

export class Socket {
    private engine!: SocketEngine
    private actions: SocketActions
    private events: SocketEvents
    private manager: SocketManager
    private _socket!: _Socket

    constructor(server: any) {
        //@ts-ignore
        this._socket = io(server, { cors: { origin: "*", methods: ["GET", "POST"], transports: ['websocket', 'polling', 'flashsocket'] } })
        this.engine = new SocketEngine(server)
        this.actions = new SocketActions(server)
        this.events = new SocketEvents(server)
        this.manager = new SocketManager(server)

        this.events.onConnection()
        this.events.onLogout()
        this.events.onRoomJoin()
        this.events.onRoomLeft()
    }
}