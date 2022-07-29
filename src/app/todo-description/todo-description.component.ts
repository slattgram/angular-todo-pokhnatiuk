import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.css']
})
export class TodoDescriptionComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private route: ActivatedRoute,private todoService:TodoService) {  }

  id: any;
  todo: Todo | any;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdFromRoute = Number(routeParams.get('todoId'));
    this.todo = this.todos.find(todo => todo.id === todoIdFromRoute)
  }
}
