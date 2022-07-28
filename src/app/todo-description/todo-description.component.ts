import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {todos,Todo} from "../todo";

@Component({
  selector: 'app-todo-description',
  templateUrl: './todo-description.component.html',
  styleUrls: ['./todo-description.component.css']
})
export class TodoDescriptionComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {
  }

  id: any;
  todo: Todo | any;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdFromRoute = Number(routeParams.get('todoId'));
    this.todo = todos.find(todo => todo.id === todoIdFromRoute)
  }

  //working, but cant display properly bc of no db
  deleteItemById() {

    for (let i = 0; i < todos.length; i++) {

      if (this.todo.id === todos[i].id) {

        todos.splice(i, 1);

      }
    }
    console.log(todos)
  }
}
