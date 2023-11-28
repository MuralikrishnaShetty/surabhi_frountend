import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
  constructor(private router:Router){}
  logout()
  {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['login']);
  }
  loggedIn()
  {
    return !!localStorage.getItem('userName')  
  }

}
