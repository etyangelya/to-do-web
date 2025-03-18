import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { TodolistComponent } from '../todolist/todolist.component';


@Component({
  selector: 'app-todo',
  imports: [HeaderComponent,CommonModule,TodolistComponent],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: string[] = []; // Array to store tasks

  addTask(task: string) { 
    this.tasks.push(task); // Adds task to array
    console.log(this.tasks)
  }
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Removes task from the array
  }

}
