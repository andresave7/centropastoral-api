import { Request, Response, NextFunction } from 'express';
import { Favorites as model } from '../models';

class FavoritesController {
  constructor() {}

  public async findByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dbresponse = await model.findAll({where: { userId: req.params.userId }});
      res.json(dbresponse);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log("Creating fav")
      console.log(req.body)
      console.dir(model)
      const dbresponse = await model.create(req.body);

      res.json(dbresponse);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }

  public async destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {userId,seriesId} = req.body;
      if (!userId || !seriesId) 
        res.status(400).send("userId and seriesId are required");
      const deletedRows = await model.destroy({ where: { userId: userId, seriesId: seriesId} });
      if (deletedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).send("User Favorite not found");
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("An unexpected error occurred");
      }
    }
  }
}

export default new FavoritesController();