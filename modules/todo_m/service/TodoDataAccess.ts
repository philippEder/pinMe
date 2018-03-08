import mysql = require("mysql"); 
import {Todo} from "../model/Todo";

export class TodoDataAccess {

    static con : any = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'SQLPass55',
        database : 'pinMe'
    });


public static getTodoById(todoId : number): Todo {

        try {
        TodoDataAccess.con.query('SELECT * FROM diaryentry AS entry ORDER BY creationTime DESC LIMIT '+limit,function (error, results, fields) {
            if (error) {
                console.log(error);
            }
            console.log(results);
        });

    } catch (e) {
        console.log(e);
    }

    
    return null;

}


}

