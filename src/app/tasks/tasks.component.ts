import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

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

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // use unshift for adding it in the beginning

    this.tasksService.addTask(taskData, this.userId);

    this.onCancelAddTask();
  }

  get selectedUserTastks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  constructor(private tasksService: TasksService) {}
}
