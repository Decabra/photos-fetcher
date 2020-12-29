import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  taskArray: string[] = [];
  taskName = '';

  addTask(): void{
    if (this.taskName !== ''){
      this.taskArray.push(this.taskName);
      this.taskName = '';
    }
    else{
      alert('Field is empty!');
    }
  }
  removeTask(index: number): void{
    this.taskArray.splice(index, 1);
  }
}
