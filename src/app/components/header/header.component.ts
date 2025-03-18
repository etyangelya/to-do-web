import { Component,Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  taskInput: string = '';
  @Output() taskadded =new EventEmitter<string>();// to send task to parent
  addTask(){
    if(this.taskInput.trim())// to check if task is added and removes all whitespaces
    this.taskadded.emit(this.taskInput);
    this.taskInput="";//clear input

  }

}
