import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent {

  inputValue1:any;
  onkeyUp(keyUp: any){
    this.inputValue1 = keyUp
  }

  bindingVariable1: string = '';
  onKeyUp(){
    this.bindingVariable1;
  }
}
