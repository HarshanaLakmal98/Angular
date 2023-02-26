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
  // create method to add data to the postList array which is in service.ts
  addNew(){
    
    let newPost: {}={
      id: 7,postTitle: 'Post 7'
    }
    this.userService.addNewPost(newPost);/* access method in UserService and pass the newPost object as a parameter */
  }
}
