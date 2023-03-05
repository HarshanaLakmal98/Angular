import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  // inject formBuilder
  constructor(private fb:FormBuilder){
}
//
  userForm = this.fb.group({
    name:['',[Validators.required,Validators.minLength(5)]]
  })
  ngOnInit(): void {
  }

onSubmit(){

}
}
