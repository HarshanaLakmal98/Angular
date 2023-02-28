import { Component } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent {
  onSubmit(form: NgForm) {
    console.log(form)
  }
  onChangeEmail(form: FormControl) {
    console.log(form)
  }
  onChangeAddress(form: FormControl) {
    console.log(form)
  }
  getValue(form: any) {
    console.log(form)
  }

}
