import { Component } from '@angular/core';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';
import { Menu } from '../classes/menu';
import { MenuslistComponent } from '../menuslist/menuslist.component';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent {
  id:number=MenuslistComponent.menuId;
  imageUrl:string=MenuslistComponent.urlImage;
  menu:Menu=new Menu(0,"",0,"","");
  constructor(private changeUser:ChangeUserService, private router:Router){}

  updateMenu(): void {
    console.log(this.id, this.menu,this.imageUrl);
    this.menu.image = this.imageUrl;
    this.changeUser.updateMenu(this.id, this.menu).subscribe(
      (res) => {
        console.log('Update successful', res);
        this.router.navigate(["/menus"]);
        
      },
      (error) => {
        console.error('Error updating data', error);
        
      }
    )
  
  }


}
