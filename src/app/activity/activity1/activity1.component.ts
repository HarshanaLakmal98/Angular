import { Component } from '@angular/core';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.scss']
})
export class Activity1Component {
  userName: string='';
  userEmail: string='';
  userAddress: string='';

  users: Array<any> = [
    {name: '', email: '', address: ''}
  ]
  submitData(){
    this.users.push(
      {name:this.userName, email:this.userEmail, address:this.userAddress},
    )
  }
  onDelete(index:any){
    this.users.splice(index,1)
  }
}
