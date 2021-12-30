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
    try {
      const $holder: Promise<any>[] = [];
      Articles.forEach((article, index) => {
        $holder.push(
          ...[
            $fs
              .readFile(
                this.folders.articles.path + "/" + article.file + "_intro.md",
                "utf-8"
              )
              .then((intro) => {
                return {
                  intro: intro,
                  name: article.name,
                  file: article.file,
                  picturesExtension: article.picturesExtension,
                  tags: article.tags,
                  date: article.date,
                };
              }),
          ]
        );
      });

      const results = await Promise.all($holder);
      res.json(results);
    } catch (error) {
      next(error);
    }
  };
}
