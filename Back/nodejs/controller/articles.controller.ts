import { NextFunction, Request, Response, Router } from "express";
import { AbstractController } from "./abstract.controller";
import { promises as $fs } from "fs";
import { Articles } from "../files";

export class ArticlesController extends AbstractController {
  private path = "/articles";
  constructor(router: Router) {
    super(router);
    this.addToRouter("get", this.path, this.index);
  }
  public index = async (req: Request, res: Response, next: NextFunction) => {
    const result: any[] = [];
    try {
      const $holder: Promise<any>[] = [];
      Articles.forEach((article, index) => {
        $holder.push(
          ...[
            $fs.readFile(
              this.folders.articles.path + "/" + article.file + "_intro.md",
              "utf-8"
            ),
          ]
        );
      });

      const results = await Promise.all($holder);
      result.push({
        intro: results[0],
        picture: results[1],
      });

      res.json({ result });
    } catch (error) {
      next(error);
    }
  };
}
