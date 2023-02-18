import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent {
  src: string = '../../../assets/images/profile-1.png' /* attribute binding */
  classList: string[] = ['w-50', 'd-block', 'mx-auto'] /* Class Binding */
}
