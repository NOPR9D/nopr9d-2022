import { Method } from "axios";
import { Router } from "express";

export class AbstractController {
  private router!: Router;
  public folders: { [key: string]: { path: string } } = {
    articles: { path: "files/articles" },
  };
  constructor(router: Router) {
    this.router = router;
  }

  public addToRouter(
    method: "get" | "post" | "put" | "delete",
    path: string,
    requestHandler: any
  ) {
    this.router[method](path, requestHandler);
  }
}
