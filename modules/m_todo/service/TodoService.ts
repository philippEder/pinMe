import {BaseService} from "../../common/BaseService";
import {Todo} from "../model/Todo";

export class TodoService extends BaseService {
    
    public static insertTodo(todo : Todo) : Promise<any> {

        let statement = "INSERT INTO TODO (TD_NAME,TD_DESCRIPTION,TD_STARTDATE,TD_ENDDATE,TD_TYPE) " +
                        "VALUES ("+ todo.name+", "+ todo.description+", "+ todo.startDate+", "+ todo.endDate+", "+ todo.type.valueOf()+");";

        return TodoService.excecuteStatement(statement).then(function (res) {
            return res;
        });
    }

    public static insertTestTodo() {
        let statement = "INSERT INTO TODO (TD_NAME,TD_DESCRIPTION,TD_STARTDATE,TD_ENDDATE,TD_TYPE) " +
                        "VALUES ('name', 'description', null, null, 1);";

        return TodoService.excecuteStatement(statement).then(function (res) {
            return res;
        });
    }

}