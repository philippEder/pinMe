import {Todo} from "../model/Todo";
import {BaseDataAccess} from "../../common/BaseDataAccess";

export class TodoDataAccess extends BaseDataAccess {


public static getAllTodos() : Promise<any> {
    let query : string = 'SELECT * FROM TODO';
    return TodoDataAccess.executeQuery(query).then(function (res) {
            return res;
    });
}




}

