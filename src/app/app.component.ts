import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-2';
  footerClass = false;
  parentToChild:string = " Shared Data parent to Child";
  parentToChild2:string = 'Changed Content by parent'
}
