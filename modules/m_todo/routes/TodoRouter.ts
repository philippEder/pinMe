import {Router, Request, Response, NextFunction} from 'express';
import {TodoDataAccess} from '../service/TodoDataAccess';

export class TodoRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/all', this.getAll);
  }

  public getById(req: Request, res : Response, nex: NextFunction) {
    
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    TodoDataAccess.getAllTodos();
    res.send('todosCalled');
  }

  

}

const todoRouter = new TodoRouter();
todoRouter.init();

export default todoRouter.router;