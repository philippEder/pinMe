import {Router, Request, Response, NextFunction} from 'express';
import {TodoDataAccess} from '../service/TodoDataAccess';

export class TodoRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    TodoDataAccess.getAllTodos();
    res.send('todosCalled');
  }

  init() {
    this.router.get('/all', this.getAll);
  }

}

const todoRouter = new TodoRouter();
todoRouter.init();

export default todoRouter.router;