import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from "../todo";
import { Router, NavigationEnd } from '@angular/router';
import { ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__ } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private todoService:TodoService, private router:Router) {}

  //media:any[] = ['fleck', 'fleck2'];

  todoList:Todo[];
  updated: string;

  refresh(event){
    setTimeout(() => {
      this.getTodoList();
      event.target.complete();
    }, 400);
  }

  onRouteChange(){
    this.router.events.subscribe((ev) => {
      if(ev instanceof NavigationEnd){
        if(ev.urlAfterRedirects === '/home' || ev.urlAfterRedirects === ''){
          setTimeout(() =>  this.getTodoList(), 1000);
          this.updated = 'yes';
        }
      }
    })
  }

  getCurrentItem(id:string){
    return this.todoList[id];
  }

  getTodoList():void{
    this.todoService.getList().subscribe(list => {this.todoList = list; this.checkDate();});
  }
  
  deleteItem(item:Todo):void{
    //this.todoList = this.todoList.filter((newItem) => newItem !== item);
    this.todoService.deleteItem(item).subscribe(() => this.getTodoList());
  }

  checkDate(){
    this.todoService.getList().subscribe(list => {this.todoList = list;
      const currentDate = new Date().getTime();
      for(let i = 0; i < this.todoList.length; i++){
        if(currentDate > this.todoList[i].date && this.todoList[i].date != null){
          this.todoList[i].over = true;
        }else{
          this.todoList[i].over = false;
          //console.log(false);
        }
      }});
  }

  open():void{
    alert('works!');
  }

  setTodoList(list:Todo[]):void{
    this.todoList = list;
  }

  checkBoxChange(event, currentid:number):void{
    //console.log(event.target.checked);
    this.todoList[currentid].done = event.target.checked;
    this.todoService.updateItem(this.todoList[currentid]).subscribe();
    //console.log(this.todoList[currentid].done);
    event.target.checked = this.todoList[currentid].done;
  }

  ngOnInit(): void {
    this.onRouteChange();
    this.getTodoList();
  }

}
