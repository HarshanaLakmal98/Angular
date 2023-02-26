import { Component } from '@angular/core';
import { UserService } from 'src/app/custom/service/user.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  users: Array <any> =[];
  constructor(private userService: UserService){
    this.users = userService.postList;
  }
}
