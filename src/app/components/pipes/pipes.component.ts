import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  // This variable for uppercase and lowercase pipes
  text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus labore animi.';

  // this variable for number and decimal pipes
  count : number = 453250;
  countDecimal: number = 45.254889;

  // currency pipes
  currency: number = 4572.25;

  // Date pipes
  date: Date = new Date

}
