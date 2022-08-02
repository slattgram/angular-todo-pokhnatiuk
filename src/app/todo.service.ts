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

  getDocById(id:string){
    return this.fbs.collection('todos').doc(id).snapshotChanges()
  }

  deleteDocById(id:string){
    this.fbs.collection('todos').doc(id).delete()
  }

}


