import { Component } from '@angular/core';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';
import { ChangeuserComponent } from '../changeuser/changeuser.component';
import { User } from '../classes/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})

//editing the user 
export class EdituserComponent {

  id:number = ChangeuserComponent.userId;
  user:User = new User(0,"","","","",false);

  constructor(private changeUser:ChangeUserService, private router:Router){}


  updateDataInDatabase(): void {
    console.log(this.id, this.user);
    this.changeUser.updateData(this.id, this.user).subscribe(
      (res) => {
        console.log('Update successful', res);
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

