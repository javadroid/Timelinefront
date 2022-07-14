import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control= new FormControl
  @Input() label=''
  @Input() type=''
  @Input() placeholder=''

  constructor() { }

    ngOnInit(): void {
    }
  showErrors(){
    const {errors , touched , dirty}=this.control
  return errors && touched && dirty;
  }
}
