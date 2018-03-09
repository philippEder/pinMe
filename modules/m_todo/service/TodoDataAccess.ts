import {Todo} from "../model/Todo";
import * as mysql from "mysql";

export class TodoDataAccess {


static connection = mysql.createConnection({
  host     : '10.0.0.13',
  user     : 'root',
  password : '12345678',
  database : 'pinMe'
});

public static getAllTodos() {
    TodoDataAccess.connection.connect();

    TodoDataAccess.connection.query('SELECT * from TODO', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
    });

    TodoDataAccess.connection.end();
}




}

