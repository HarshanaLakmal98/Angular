import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {

  isActive: boolean = true;

  paraColor1: object = {
    color:'red',
    fontFamily: 'sans-serif',
    textAlign: 'justify'
  }
  paraColor2: object = {
    color:'green',
    fontFamily: 'serif',
    textAlign: 'center'
  }
}
