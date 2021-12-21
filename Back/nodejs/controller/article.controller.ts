import { NextFunction, Request, Response, Router } from "express";
import { AbstractController } from "./abstract.controller";
import { promises as $fs } from "fs";
export class ArticleController extends AbstractController {
  private path = "/article";
  constructor(router: Router) {
    super(router);
    this.addToRouter("get", this.path + "/:title", this.index);
  }
  public index = async (req: Request, res: Response, next: NextFunction) => {
    const articles = await $fs.readdir(this.folders.articles.path, "utf8");
    const article = req.params.title;
    const isArticleExist = articles
      .map((_article) => _article.split(".")[0])
      .includes(article);

    if (isArticleExist) {
      try {
        $fs
          .readFile(this.folders.articles.path + "/" + article + ".md", "utf-8")
          .then((data) => {
            res.json(data);
          });
      } catch (error) {
        next(error);
      }
    } else {
      res.status(404).json("Article not found");
    }
  };
}
