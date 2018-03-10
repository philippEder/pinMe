import {Todo} from "../model/Todo";
import {BaseDataAccess} from "../../common/BaseDataAccess";

export class TodoDataAccess extends BaseDataAccess {

public static getAllTodos() {
    let query : string = 'SELECT * FROM TODO';
    TodoDataAccess.executeQuery(query);

}




}

