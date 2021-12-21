import { NextFunction, Request, Response, Router } from "express";
import { AbstractController } from "./abstract.controller";

export class IndexController extends AbstractController {
  private path = "/";
  constructor(router: Router) {
    super(router);
    this.addToRouter("get", this.path, this.index);
  }
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ message: "ok" });
    } catch (error) {
      next(error);
    }
  };
}
