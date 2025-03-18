import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule,CommonModule,],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
@Input() tasks: string[]= [];
@Output() taskCompleted = new EventEmitter<number>();
 completeTask(index: number)  {
  this.taskCompleted.emit(index); // Send index to parent
}

}
