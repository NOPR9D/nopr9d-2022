import { Router } from "express";
import { Route } from "../interfaces";
import {
  HomeController,
  IndexController,
  SceneController,
  ScenesController,
  ArticlesController,
} from "../controller";

export class IndexRouter implements Route {
  public path = "";
  public router!: Router;
  public indexController: IndexController;
  public homeController: HomeController;
  public sceneController: SceneController;
  public scenesController: ScenesController;
  public articlesController: ArticlesController;

  constructor() {
    this.router = Router();
    this.indexController = new IndexController(this.router);
    this.homeController = new HomeController(this.router);
    this.sceneController = new SceneController(this.router);
    this.scenesController = new ScenesController(this.router);
    this.articlesController = new ArticlesController(this.router);
  }
}
