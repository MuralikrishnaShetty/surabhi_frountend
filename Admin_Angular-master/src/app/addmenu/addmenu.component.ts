import { Component } from '@angular/core';
import { Menu } from '../classes/menu';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {
  menu:Menu = new Menu(0,"",0,"","");
  constructor(private changeUser:ChangeUserService, private router:Router){}
  addMenu(data:any):void{
    console.log(this.menu);
    this.changeUser.addMenu(data).subscribe(
      (res) => {
        console.log('added successful', res);
        this.router.navigate(["/menus"]);
        // Handle success, if needed
      },
      (error) => {
        console.error('Error updating data', error);
        // Handle error, if needed
      }
    )
    
  }

}
