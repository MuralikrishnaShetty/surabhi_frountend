import { Component } from '@angular/core';
import { Menu } from '../classes/menu';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-menuslist',
  templateUrl: './menuslist.component.html',
  styleUrls: ['./menuslist.component.css']
})
export class MenuslistComponent {
  static menuId:number;
  static urlImage:string;
  menus:Menu[]=[];
  constructor(private changeUser:ChangeUserService, private router:Router){}
  //geting imageurl
  getImageUrl(url:string){
    MenuslistComponent.urlImage=url;
    console.log(MenuslistComponent.urlImage)
  }
  //adding id to the menuid
  getMenuId(id:number){
    MenuslistComponent.menuId=id;
    console.log( MenuslistComponent.menuId=id)
  }
  //to fetch data onload of the page 
  ngOnInit(): void {
    // Fetch initial user data
    this.fetchAllMenu();
  }
  //fetching all the data of menu from the database 
  fetchAllMenu():void{
    this.changeUser.getAllMenu().subscribe(
      (res)=>{
        this.menus=res
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  // deleteing the menu from the
  deleteMenu(id:number):void{
   
      console.log(id);
      this.changeUser.deletemenu(id).subscribe(
        () => {
          console.log('User deleted successfully');
          // Remove the deleted user from the local array
          this.menus = this.menus.filter((menu) => menu. foodId!== id);
          // this.router.navigate(["/admin"]);
        },
        (err)=>{
          console.log("Error: ",err);
          // this.router.navigate(["/admin"]);
          if (err instanceof HttpErrorResponse && err.status === 200) {
            // If the response is plain text with status 200, consider it a success
            console.log("User deleted successfully");
            this.menus = this.menus.filter((menu) => menu. foodId!== id);
            // this.router.navigate(["/admin"]);
          } else {
            console.error("Unexpected error:", err);
            
          }
        }
      )
    }
  

}
