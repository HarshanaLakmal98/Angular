import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.scss']
})
export class EventFilteringComponent {
onKeyup() {
  console.log('hit the enter button')
  alert('Hit the enter button')
}


}
