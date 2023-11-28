import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';
import { Menu } from '../classes/menu';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrls: ['./usernavbar.component.css']
})
export class UsernavbarComponent {
  @Output("addfoodName") foodName=new EventEmitter<string>();
  @Output("findByName")searchObject=new EventEmitter<Menu[]>();
  addfoodName(value:string){
    this.foodName.emit(value);
  }
  //name of the food
  nameOfTheFood:string='';
  
  

 
 

  // menu: Menu | null = null;
  
  constructor(private service:ChangeUserService,private router:Router){}
  // find the menu by name 
  // static getName(){
  //  return UsernavbarComponent.foodName;
  // }
 
 
  
  //to know loggedin or not by checking the local storage 
  loggedIn()
  {
    return !!localStorage.getItem('userName')  
  }
  // logging out by deleteing the data in local storage
  logout()
  {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['login']);
  }
  //searching for the food by its name 
  findByName() {
    this.service.findByName(this.nameOfTheFood).subscribe(
      (res)=>{
       this.searchObject.emit(res);
        console.log(res );
      },
      (err)=>{
        console.log(err);
      }
    )
  
  
  }



}
