import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-nested',
  templateUrl: './reactive-form-nested.component.html',
  styleUrls: ['./reactive-form-nested.component.scss']
})
export class ReactiveFormNestedComponent {
  constructor(private fb:FormBuilder){}
  userForm = this.fb.group({
    name:[''],
    email:[''],
    // nested formGroup
    address:this.fb.group({
      street:[''],
      city:[''],
    }),
    about:[''],

  })
}
