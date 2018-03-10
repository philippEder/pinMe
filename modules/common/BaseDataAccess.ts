import * as mysql from "mysql";

export abstract class BaseDataAccess {

    static connection = mysql.createConnection({
        host     : '10.0.0.13',
        user     : 'root',
        password : '12345678',
        database : 'pinMe'
    });

    public static executeQuery(query : string) : any {
        BaseDataAccess.connection.connect();

        BaseDataAccess.connection.query(query, function(err, rows, fields) {
            if (!err) {
                return rows;
            }
            else {
                throw('Error while performing Query: ' + query);
            }
        });

        BaseDataAccess.connection.end();

    }

}