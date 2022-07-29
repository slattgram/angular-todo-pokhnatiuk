import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo'
import {Firestore, collection, docData, collectionData, getDocs} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];

  constructor(private firestore: Firestore) {
    const todoCollection = collection(firestore,'todos')
    getDocs(todoCollection).then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
        this.todoList.push({
          id: doc.data()['id'],
          description: doc.data()['description'],
          title: doc.data()['title'],
          isDone: doc.data()['isDone']
        })
      })
    })
    console.log(this.todoList)
  }

  ngOnInit(): void {

  }

}
