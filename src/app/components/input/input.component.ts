import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() Parent:string='';
  @Input() parent2:string= '';
  patentFooter:string = "Footer changed";
}
