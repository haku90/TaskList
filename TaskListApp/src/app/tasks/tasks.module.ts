import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TasksRestService } from './tasks.rest';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TaskListComponent, TaskComponent],
  exports: [TaskListComponent, TaskComponent],
  providers: [TasksRestService]
})
export class TasksModule { }

