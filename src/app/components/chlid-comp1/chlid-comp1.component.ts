import { Component } from '@angular/core';

@Component({
  selector: 'app-chlid-comp1',
  templateUrl: './chlid-comp1.component.html',
  styleUrls: ['./chlid-comp1.component.scss']
})
export class ChlidComp1Component {
  childToParent: string = 'This message from child to parent';
}
