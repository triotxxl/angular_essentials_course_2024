import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
    UserComponent,
  ], // for non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule], // can be used for standalone components
})
export class AppModule {}
