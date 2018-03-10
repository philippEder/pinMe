import {TodoType} from "./TodoType";

export class Todo {
    
    id : number;
    name: string;   
    description : string;
    startDate : Date;
    endDate : Date;
    type : TodoType = TodoType.DEFAULT;


    constructor(id: number, name: string, description: string, startDate: Date, endDate: Date) {    
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public static fromJson(json) : Todo {
        let id : number = json[0]["TD_ID"];
        let name : string = json[0]["TD_NAME"];
        let description : string = json[0]["TD_DESCRIPTION"];
        let startDate : Date = new Date(json[0]["TD_STARTDATE"]);
        let endDate : Date = new Date(json[0]["TD_ENDDATE"]);

        return new Todo(id,name,description,startDate,endDate);
    }

    public static manyFromJson(json : String) : Todo[] {
        return null;
    }

}