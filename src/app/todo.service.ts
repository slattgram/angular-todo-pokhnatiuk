import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})

export class TodoService {



  constructor(private fbs: AngularFirestore) {}
    getData(){
     return this.fbs.collection('todos').snapshotChanges()
    }

}


