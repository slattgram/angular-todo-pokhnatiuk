import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDescriptionComponent } from './todo-description/todo-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";

const config = {
  apiKey: "AIzaSyCLvEGr6StvBXYJU0C-G-uuJniAwsWPG3Q",
  authDomain: "todo-angular-pokhnatiuk.firebaseapp.com",
  projectId: "todo-angular-pokhnatiuk",
  storageBucket: "todo-angular-pokhnatiuk.appspot.com",
  messagingSenderId: "234663851774",
  appId: "1:234663851774:web:5c44471bac3245224ad7af",
  measurementId: "G-S9FYCHMJ7K"
};



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    [RouterModule.forRoot([
      {path: '', component: TodoListComponent},
      {path: 'todo/:todoId', component: TodoDescriptionComponent}
    ])],
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
