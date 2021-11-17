import { Router } from "express";
import { Route } from "../interfaces";
import { IndexController } from "../controller/index.controller"

export class IndexRouter implements Route {
  public path = '/'
  public router!:Router
  public indexController = new IndexController();

  constructor() {
    this.router = Router()
    this.init()
  }

  private init() {
    this.router.get(`${this.path}`, this.indexController.index)
  }
}