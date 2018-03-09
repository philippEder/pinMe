import {Router, Request, Response, NextFunction} from 'express';
import {TodoDataAccess} from '../service/TodoDataAccess';

export class TodoRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    TodoDataAccess.getAllTodos();
    res.send('todosCalled');
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/all', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const todoRouter = new TodoRouter();
todoRouter.init();

export default todoRouter.router;