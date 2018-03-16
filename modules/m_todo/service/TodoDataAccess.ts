import {Todo} from "../model/Todo";
import {BaseDataAccess} from "../../common/BaseDataAccess";

export class TodoDataAccess extends BaseDataAccess {


    public static getAllTodos() : Promise<any> {
        let query : string = 'SELECT * FROM TODO';
        return TodoDataAccess.executeQuery(query).then(function (res) {
                return res;
        });
    }

    public static getTodoById(todoId : number) : Promise<any> {
        let query : string = 'SELECT * FROM TODO WHERE TD_ID = ' + todoId;
        return TodoDataAccess.executeQuery(query).then(function (res) {
                return res;
        });
    }

    public static getTodoByType(typeId : number) : Promise<any> {
        let query : string = 'SELECT * FROM TODO WHERE TD_TYPE = ' + typeId;
        return TodoDataAccess.executeQuery(query).then(function (res) {
                return res;
        });
    }

    public static getTodosOrderedByDueDateDescPaged(offset : number, limit : number) : Promise <any> {
        let query : string = 'SELECT * FROM TODO ORDER BY TD_STARTDATE DESC LIMIT ' + limit;
        return TodoDataAccess.executeQuery(query).then(function (res) {
            return res;
        });
    }

}

