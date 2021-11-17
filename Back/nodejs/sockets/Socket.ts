import { SocketEngine } from "./SocketEngine";

export class Socket {
    private engine!: SocketEngine

    constructor(server: any) {
        this.engine = new SocketEngine(server)
    }
}