import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  alertMessage():void{
    alert('Hello Event Binding')
  }
  mouseOver():void{
    const content = document.querySelector('.content') as HTMLDivElement;
    content.classList.add('bg-primary' ,'text-dark')
  }
  mouseLeave():void{
    const content = document.querySelector('.content') as HTMLDivElement;
    content.classList.remove('bg-primary')
  }
}
