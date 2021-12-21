import { NextFunction, Request, Response, Router } from "express";
import { AbstractController } from "./abstract.controller";

export class SceneController extends AbstractController {
  private path = "/scene";
  constructor(router: Router) {
    super(router);
    this.addToRouter("get", this.path, this.index);
  }
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json([{ title: "spaceship", socket: { props: "", default: "" } }]);
    } catch (error) {
      next(error);
    }
  };
}
