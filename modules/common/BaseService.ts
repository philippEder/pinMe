import * as mysql from "mysql";

export abstract class BaseService {

    static connectionJson = {
        host     : '10.0.0.13',
        user     : 'root',
        password : '12345678',
        database : 'pinMe'
    };

    public static excecuteStatement(statement : string) : Promise<any> {
        return new Promise((resolve,reject) => {

            let connection = mysql.createConnection(this.connectionJson);

            connection.beginTransaction(function(err) {
                if (!err) {
                    connection.query(statement, function(err, result) {
                            if (err) {
                                connection.rollback(function() {
                                    reject(err);
                                });
                            }

                            connection.commit(function(err) {
                            if (err) {
                                connection.rollback(function() {
                                    reject(err);
                                });
                            } else {
                                resolve(result)
                            }
                        });
                    });
                } else {
                    reject(err);
                }

            });
        });   
    }


}   
