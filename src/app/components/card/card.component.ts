import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // card 1
    header1: string = "Pooja Umashankar";
    post1: string = "Actor";
    text1: string = "Lorem ipsum Waringin poweshell detected that you might be using a screen reader and has disabled PSReadLine."
    img1: string = '../../assets/images/profile-1.png'

    // card 2
    header2: string = "Ajith Kumar";
    post2: string = "Actor";
    text2: string = "Lorem ipsum Waringin poweshell detected that you might be using a screen reader and has disabled PSReadLine."
    img2: string = '../../assets/images/profile-2.png'
}
