import { NextFunction, Request, Response, Router } from "express";
import { AbstractController } from "./abstract.controller";

export class HomeController extends AbstractController {
  private path = "/home";
  constructor(router: Router) {
    super(router);
    this.addToRouter("get", this.path, this.index);
  }
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json([{ title: "home", socket: { props: "", default: "" } }]);
    } catch (error) {
      next(error);
    }
  };
}
