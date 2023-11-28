import { Component } from '@angular/core';
import { Menu } from '../classes/menu';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchedmenu',
  templateUrl: './searchedmenu.component.html',
  styleUrls: ['./searchedmenu.component.css']
})
export class SearchedmenuComponent {
  menus:Menu[]=[];
  // searchMenu:Menu|undefined;
  menu:Menu=new Menu(0,"",0,"","");
  

  constructor(private changeUser:ChangeUserService, private router:Router){}
  
  //to fetch data onload of the page 
  ngOnInit(): void {
    // Fetch initial user data
    this.findByName();
    
  }
  public foodName:string='';
  additem(value:string){
     this.foodName=value;
     console.log("this is the value of food from the child:"+this.foodName)

  }
//function for searching the food 
findByName():void {
  this.changeUser.findByName(this.foodName).subscribe(
    (res)=>{
      this.menus=res;
      console.log(this.menu)
    },
    (err)=>{
      console.log(err);
    }
  )


}
 


  

 

}
