import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html'
})

export class TaskListComponent implements OnInit {

  private tasks: any[];

  constructor() { }

  ngOnInit() {
    
  }

}
