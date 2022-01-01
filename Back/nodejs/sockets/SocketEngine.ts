import { Server } from "socket.io";
import { SOCKET_EVENTS } from "../interfaces";

export class SocketEngine {
  public server!: Server;

  constructor(server: Server) {
    this.server = server;
  }

  public onLoadWebsite(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.WEBSITE_READY, (username) => {
      actionCallback(username);
    });
  }

  public onLeftWebsite(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.WEBSITE_IS_LEFT, (username) => {
      actionCallback(username);
    });
  }

  public onArticleReading(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.ARTICLE_READING, (article) => {
      actionCallback(article);
    });
  }
  public onGamePlaying(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.GAME_PLAYING, (data) => {
      actionCallback(data);
    });
  }
  public onGameScoring(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.GAME_SCORING, (data) => {
      actionCallback(data);
    });
  }
  public onGameBestScoring(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.GAME_BEST_SCORING, (data) => {
      actionCallback(data);
    });
  }

  public onMessageSend(actionCallback: Function): void {
    this.server.on(SOCKET_EVENTS.MESSAGE_SEND, (data) => {
      actionCallback(data);
    });
  }
}
