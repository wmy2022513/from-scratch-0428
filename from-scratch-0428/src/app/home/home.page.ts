import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  //Java
  //String[] todos = new String[];
  todos: string[] = [''];
  todoModel = { todo:''};

  addTodo(){
    // this.todos.push
    this.todos.push(this.todoModel["todo"]);
    this.todoModel = { todo:''};
    console.log(this.todos)
  }

}
