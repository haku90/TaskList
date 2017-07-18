import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  @Input() task;

  constructor() { }

  ngOnInit() {
  }

   markDone(checked) {
     this.task.done = checked;
   }
}
