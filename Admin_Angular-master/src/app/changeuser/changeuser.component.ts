import { AfterViewInit, Component } from '@angular/core';
import { User } from '../classes/user';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changeuser',
  templateUrl: './changeuser.component.html',
  styleUrls: ['./changeuser.component.css']
})
export class ChangeuserComponent {
  users:User[] = [];
  static userId:number;
  constructor(private changeUser:ChangeUserService, private router:Router){}

  getUserId(id:number){
    ChangeuserComponent.userId=id;
  }
  ngOnInit(): void {
    // Fetch initial user data
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.changeUser.getAllUser().subscribe(
      (res)=>{
        this.users = res;
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  deleteUser(id:number){
    console.log(id);
    this.changeUser.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        // Remove the deleted user from the local array
        this.users = this.users.filter((user) => user.id !== id);
        // this.router.navigate(["/admin"]);
      },
      (err)=>{
        console.log("Error: ",err);
        // this.router.navigate(["/admin"]);
        
      }
    )
  }
  
}
