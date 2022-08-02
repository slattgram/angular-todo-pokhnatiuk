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
    const todoIdFromRoute = routeParams.get('todoId');
    this.todoService.getDocById(<string>todoIdFromRoute).subscribe(res=>{
      this.todo = {
        id: res.payload.id,
        ...(res.payload.data() as Record<string, unknown>)
      }
    })
  }

  deleteThisDoc(){
    this.todoService.deleteDocById(this.todo.id)
  }

}
