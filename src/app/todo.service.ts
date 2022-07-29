import { Injectable } from '@angular/core';
import {Firestore,docSnapshots} from "@angular/fire/firestore/lite";
import {Todo} from "./todo";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {

  }
}
