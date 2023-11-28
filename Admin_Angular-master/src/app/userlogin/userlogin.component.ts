import { Component } from '@angular/core';
import { ChangeUserService } from '../services/change-user.service';
import { Route, Router } from '@angular/router';
import { Loginclass } from '../classes/loginclass';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private changeuserservice: ChangeUserService, private router: Router) { }
  loginClass: Loginclass = new Loginclass("", "");
  user: any;
  loginUser(userdata: any) {
    this.changeuserservice.login(userdata).subscribe(
      (res) => {

        this.user = res;
        if (this.user !== null) {
          if (this.user.admin) {

            console.log(this.user.admin);
            // to naviagte to the userList page that is admin page 
            this.router.navigate(["/userlist"]);
            // storing the username,admin or not  and id in the local storage for auth gurd and other uses of the website
            localStorage.setItem('userName',this.user.firstName);
            localStorage.setItem('userId',this.user.id);
            localStorage.setItem('isAdmin',this.user.admin);

            // this code is used for the debuging 
            console.log("this is the response:"+this.user.firstName);
            console.log("this is the response:"+this.user.id);


          }
          else {
            // navigate to the home page which is user page 
            this.router.navigate(["/"]);
            // stroring the username,admin or not and user id in the localstorage 
            localStorage.setItem('userName',this.user.firstName);
            localStorage.setItem('userId',this.user.id);
            localStorage.setItem('isAdmin',this.user.admin);
            // this code is used for debuging 
            console.log("this is the response:"+this.user.firstName);
            console.log("this is the response:"+this.user.id);

          }
        } else {
          console.log("invalid id ");
          alert("Invalid username or password. Please try again.");
        }

      }
    )


  }




}
