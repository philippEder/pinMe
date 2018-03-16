import {Router, Request, Response, NextFunction} from 'express';
import {TodoDataAccess} from '../service/TodoDataAccess';
import { TodoService } from '../service/TodoService';

export class TodoRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/all', this.getAll);
    this.router.get('/pending',this.getPending);
    this.router.post("/insertTest", this.inserTestTodo);
  }

  public getById(req: Request, res : Response, nex: NextFunction) {
    
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    TodoDataAccess.getAllTodos()
        .then(function (val) { 
          res.send(val); 
        })
        .catch(function (err) {
          res.send(err);
        })
  }

  public inserTestTodo(erq: Request, res:Response, next : NextFunction) {
    TodoService.insertTestTodo()
        .then(function (val) { 
          res.send(val); 
        })
        .catch(function (err) {
          res.send(err);
        })
  }

  public getPending(req : Request, res : Response, next : NextFunction) {
    TodoDataAccess.getTodosOrderedByDueDateDescPaged(0,5)
                  .then((val) => res.send(val))
                  .catch((err) => res.send(err));
  }

  

}

const todoRouter = new TodoRouter();
todoRouter.init();

export default todoRouter.router;