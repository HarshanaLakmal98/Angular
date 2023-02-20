import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  students =[
    {firstName: 'Harshana', lastName : 'Senewirathne', email: 'harshana123@gmail.com'},
    {firstName: 'Arona', lastName : 'Diana', email: 'Arona123@gmail.com'},
    {firstName: 'Dammika', lastName : 'Pathmakumari', email: 'Dammika123@gmail.com'},
    {firstName: 'Akila', lastName : 'Senewirathne', email: 'Akila123@gmail.com'},
  ]
}
