import { Server } from "socket.io";

export class SocketEngine {
    public server!: Server

    constructor(server: Server) {
        this.server = server
    }
}