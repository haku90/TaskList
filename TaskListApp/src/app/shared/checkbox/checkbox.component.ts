import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})

export class CheckboxComponent implements OnInit {

  @Input() checked;
  @Output() checkedChange = new EventEmitter();

  constructor() { }
    
  ngOnInit() {
  }
  
  onCheckedChange(checked) {
    this.checkedChange.emit(checked);
  }
}