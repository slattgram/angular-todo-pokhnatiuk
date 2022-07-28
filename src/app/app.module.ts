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
    ])]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
