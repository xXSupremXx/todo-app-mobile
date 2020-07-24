export interface Todo {
    name: string;
    date:number;
    creation_date: number;
    description: string;
    done: boolean;
    over: boolean;
    [key:string]:any;
}