import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { Image } from './image';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl = 'https://todo-list-strapi.herokuapp.com/to-dos';
  //private fileUrl = 'http://localhost:1337/upload';

  /*httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };*/

  getList():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl).pipe(
      catchError(this.handleError<Todo[]>('getTodoList'))
    );
  }

  getItem(id:string):Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<Todo>(`getItem id=${id}`))
    );
  }

  /*getImage(imageName:string):Observable<Image>{
    return this.httpClient.get<Image>(this.fileUrl + imageName).pipe(
      tap(_ => console.log('fetched image')),
      catchError(this.handleError<any>('getImage'))
    );
  }

  uploadItem(image:File):Observable<File>{
    return this.httpClient.post<File>(`${this.fileUrl}`, image);
  }

  deleteImage(id:string):Observable<Image>{
    return this.httpClient.delete<Image>(`${this.fileUrl}/files/${id}`);
  }*/

  updateItem(item:Todo):Observable<Todo>{
    return this.httpClient.put<Todo>(this.apiUrl + '/' + item.id, item).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(item:Todo):Observable<Todo>{
    const url = `${this.apiUrl}/${item.id}`
    	return this.httpClient.delete<Todo>(url).pipe(
        catchError(this.handleError<Todo>('deleteItem'))
      );
  }

  addItem(todo:Todo):Observable<Todo>{
    return this.httpClient.post<Todo>(this.apiUrl, todo).pipe(
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
