import {TodoType} from "./TodoType";

export class Todo {
    
    name: string;   
    description : string;
    startDate : Date;
    endDate : Date;
    type : TodoType = TodoType.DEFAULT;


    constructor(public name1: string, public description1: string, public startDate1: Date, public endDate1: Date) {    
        this.name = name1;
        this.description = description1;
        this.startDate = startDate1;
        this.endDate = endDate1;
    }

    public static fromJson(json : String) : Todo {
        console.log(json);
        return null;
    }

    public static manyFromJson(json : String) : Todo[] {
        return null;
    }

}