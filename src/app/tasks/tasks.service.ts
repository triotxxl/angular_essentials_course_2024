import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
    const tasks = this.tasks.filter((task) => task.userId === userId);

    console.log('Tasks', tasks);
    return tasks;
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId,
    });
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
