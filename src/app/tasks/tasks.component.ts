import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name: string | undefined = ''; // longer
  @Input({ required: true }) userId: string = '';
  @Input({ required: true }) name: string = '';
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basics of Angular',
      dueDate: '2022-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn Angular Material',
      summary: 'Learn the basics of Angular Material',
      dueDate: '2022-12-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Learn Angular Material',
      summary: 'Learn the basics of Angular Material',
      dueDate: '2022-12-31',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Learn Angular CLI',
      summary: 'Learn the basics of Angular CLI',
      dueDate: '2022-12-31',
    },
  ];

  onCompleteTask(id: string) {
    console.log('Complete task', id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // use unshift for adding it in the beginning
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId,
    });

    this.onCancelAddTask();
  }

  get selectedUserTastks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}
