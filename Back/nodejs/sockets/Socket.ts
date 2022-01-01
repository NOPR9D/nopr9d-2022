import { SocketActions, SocketManager } from ".";
import { SocketEngine } from "./SocketEngine";
import io, { Socket as _Socket, ServerOptions } from "socket.io";

export class Socket {
  private engine!: SocketEngine;
  private actions: SocketActions;
  private manager: SocketManager;
  private _socket!: _Socket;

  constructor(server: any) {
    //@ts-ignore
    this._socket = io(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ["websocket", "polling", "flashsocket"],
      },
    } as ServerOptions);

    this.engine = new SocketEngine(server);
    this.actions = new SocketActions(server);
    this.manager = new SocketManager(server);
  }

  public listenAndEmit() {
    this.engine.onGameScoring(this.actions.onGameScoring);
    this.engine.onArticleReading(this.actions.onArticleReading);
    this.engine.onGameBestScoring(this.actions.onGameBestScoring);
    this.engine.onGamePlaying(this.actions.onGamePlaying);
    this.engine.onLeftWebsite(this.actions.onLeftWebsite);
    this.engine.onLoadWebsite(this.actions.onLoadWebsite);
    this.engine.onMessageSend(this.actions.onMessageSend);
  }
}
