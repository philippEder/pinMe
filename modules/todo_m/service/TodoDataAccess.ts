import mysql = require("mysql"); 
import {Todo} from "../model/Todo";

export class TodoDataAccess {

    static con : any = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'SQLPass55',
        database : 'pinMe'
    });




}

