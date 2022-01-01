import { Server, Socket } from "socket.io";
import { SocketEngine } from "./SocketEngine";

export class SocketManager extends SocketEngine {
  private rooms: any[] = [];
  private users: any[] = [];
  private activity: any[] = [];
}
