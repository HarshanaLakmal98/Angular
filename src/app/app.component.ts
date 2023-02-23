import { Component, ViewChild,AfterViewInit} from '@angular/core';
import { ChlidComp1Component } from './components/chlid-comp1/chlid-comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'project-2';
  footerClass = false;
  parentToChild:string = " Shared Data parent to Child";
  parentToChild2:string = 'Changed Content by parent'

  // access child's Data
  @ViewChild(ChlidComp1Component) childMessage:any;
  childMes: string ='';

  ngAfterViewInit(): void {
    this.childMes = this.childMessage.childToParent;
  }
}

