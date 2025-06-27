export type TaskStatus =  "Pending" | "In Progress" | "Completed";

export interface Task {
        id : String;
        title : String;
        description : string ;
        status : TaskStatus;
        date : string; //can be ISO string  
}