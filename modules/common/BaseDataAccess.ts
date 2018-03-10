import * as mysql from "mysql";

export abstract class BaseDataAccess {

    static connectionJson = {
        host     : '10.0.0.13',
        user     : 'root',
        password : '12345678',
        database : 'pinMe'
    };

    public static  executeQuery(query : string) : Promise<any> {
        return new Promise((resolve,reject) => {

            let connection = mysql.createConnection(this.connectionJson);

            connection.query(query, function(err, rows, fields) {
                if (!err) {
                    resolve(rows);
                } else {
                    reject(err);
                }  
            });
        });   
    }
}