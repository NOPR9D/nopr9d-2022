import { SocketUser } from ".";

export enum SOCKET_EVENTS {
  WEBSITE_READY = "websiteIsReady",
  WEBSITE_IS_LEFT = "websiteIsLeft",
  ARTICLE_READING = "articleReading",
  GAME_PLAYING = "gamePlaying",
  GAME_SCORING = "gameScoring",
  GAME_BEST_SCORING = "gameBestScoring",
  MESSAGE_SEND = "messageSend",
}

export interface EventGameScoring extends SocketUser {
  score: number;
  date: string;
}
export interface EventArticleReading extends SocketUser {
  article: string;
}
export interface EventGameBestScoring extends SocketUser {
  score: number;
  date: string;
}
export interface EventGamePlaying extends SocketUser {
  game: string;
  date: string;
}
export interface EventLeftWebsite extends SocketUser {
  date: string;
}
export interface EventLoadWebsite extends SocketUser {
  date: string;
}
export interface EventMessageSend extends SocketUser {
  message: string;
  room: string;
}
