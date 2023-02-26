import { Component } from '@angular/core';
import { UserService } from 'src/app/custom/service/user.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.scss']
})
export class Service2Component {
  users: Array<any> = [];
  constructor(private userService : UserService){
    this.users = userService.postList;
  }
}
