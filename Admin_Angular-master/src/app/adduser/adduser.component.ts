import { Component } from '@angular/core';
import { User } from '../classes/user';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  //calling object of the user
  user:User = new User(0,"","","","",false);

  constructor(private changeUser:ChangeUserService, private router:Router){}

  //adding user 
  addUser(data:any):void{
    console.log(this.user);
    this.changeUser.addUser(data).subscribe(
      (res) => {
        console.log('added successful', res);
        this.router.navigate(["/userlist"]);
        // Handle success, if needed
      },
      (error) => {
        console.error('Error updating data', error);
        // Handle error, if needed
      }
    )
    
  }

}

