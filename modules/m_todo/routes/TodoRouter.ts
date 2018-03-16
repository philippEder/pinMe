import {Router, Request, Response, NextFunction} from 'express';
import {TodoDataAccess} from '../service/TodoDataAccess';
import { TodoService } from '../service/TodoService';
import { Todo } from '../model/Todo';

export class TodoRouter {
  router: Router

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/all', this.getAll);
    this.router.get('/pending',this.getPending);
    this.router.post('/insertTest', this.inserTestTodo);
    this.router.get("/mocked",this.getMockedData);
  }

  private getById(req: Request, res : Response, nex: NextFunction) {
    
  }

  private getAll(req: Request, res: Response, next: NextFunction) {
    TodoDataAccess.getAllTodos()
        .then(function (val) { 
          res.send(val); 
        })
        .catch(function (err) {
          res.send(err);
        })
  }

  private inserTestTodo(erq: Request, res:Response, next : NextFunction) {
    TodoService.insertTestTodo()
        .then(function (val) { 
          res.send(val); 
        })
        .catch(function (err) {
          res.send(err);
        })
  }

  private getPending(req : Request, res : Response, next : NextFunction) {
    TodoDataAccess.getTodosOrderedByDueDateDescPaged(0,5)
                  .then((val) => res.send(val))
                  .catch((err) => res.send(err));
  }

  //lets keep this for some offline data
  private getMockedData(req : Request, res : Response, next : NextFunction) {
    res.send([
      new Todo(1,'testName1','testDesc1',new Date(),new Date()),
      new Todo(2,'testName2','testDesc2',new Date(),new Date()),
      new Todo(3,'testName3','testDesc3',new Date(),new Date()),
      new Todo(4,'testName4','testDesc4',new Date(),new Date()),
      new Todo(5,'testName5','testDesc5',new Date(),new Date()),
      new Todo(6,'testName6','testDesc6',new Date(),new Date()),
      new Todo(7,'testName7','testDesc7',new Date(),new Date()),
      new Todo(8,'testName8','testDesc8',new Date(),new Date()),
      new Todo(9,'testName9','testDesc9',new Date(),new Date()),
      new Todo(10,'testName10','testDesc10',new Date(),new Date())
    ]);
  }

  

}

const todoRouter = new TodoRouter();
todoRouter.init();

export default todoRouter.router;