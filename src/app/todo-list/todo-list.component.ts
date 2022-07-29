import { Component, OnInit } from '@angular/core';

import {TodoService} from "../todo.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo$ : Todo[] = [];
  constructor(private todoService:TodoService) {

  }



  ngOnInit(){
    this.todoService.getData().subscribe(response=>{
      response.forEach(doc=>{
        this.todo$.push({
          id: doc.payload.doc.get('id'),
          title: doc.payload.doc.get('title'),
          description: doc.payload.doc.get('description'),
          isDone: doc.payload.doc.get('isDone')
        })
      })
    })
  }
}

