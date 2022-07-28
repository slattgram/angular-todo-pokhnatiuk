import { Component, OnInit } from '@angular/core';
import {todos} from '../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = todos;
  constructor() { }

  ngOnInit(): void {
  }

}
