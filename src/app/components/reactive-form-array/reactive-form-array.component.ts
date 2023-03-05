import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-array',
  templateUrl: './reactive-form-array.component.html',
  styleUrls: ['./reactive-form-array.component.scss']
})
export class ReactiveFormArrayComponent {
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
    // create Array
    skills:this.fb.array([
      this.fb.control('')
    ])
  })

  // add skill method
  addSkills(skill: HTMLInputElement){
    (this.userForm.get('skills') as FormArray).push(skill);
  }
}
