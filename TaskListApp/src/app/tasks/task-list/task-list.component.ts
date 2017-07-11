import { Component, OnInit } from '@angular/core';
import { TasksRestService } from '../tasks.rest';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})

export class TaskListComponent implements OnInit {

  private tasks: any[];

  constructor(private rest: TasksRestService) { }

  ngOnInit() {
    this.rest.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
