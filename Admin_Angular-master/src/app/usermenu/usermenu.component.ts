import { Component, Injectable, Input } from '@angular/core';
import { Menu } from '../classes/menu';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';
import { UsernavbarComponent } from '../usernavbar/usernavbar.component';
import { HttpClient } from '@angular/common/http';
import { Cartmenu } from '../classes/cartmenu';



@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class UsermenuComponent {
searchResult:Menu[]=[];
booleansearch:boolean=false;
// searches the food
searchedFood(value:Menu[]){
  this.searchResult=value;
  this.booleansearch=true;
  console.log(this.booleansearch);

}


  public foodName:string='';
  additem(value:string){
     this.foodName=value;
     console.log("this is the value of food from the child:"+this.foodName)

  }
//function for searching the food 
// findByName():void {
//   this.changeUser.findByName(this.foodName).subscribe(
//     (res)=>{
//       this.menus=res;
//       console.log(this.menus)
//     },
//     (err)=>{
//       console.log(err);
//     }
//   )


// }


 


  

  menus:Menu[]=[];
 
  
  
  

  constructor(private changeUser:ChangeUserService, private router:Router){}
  
  //to fetch data onload of the page 
  ngOnInit(): void {
    // Fetch initial user data
    this.fetchAllMenu();
    console.log(this.booleansearch)
    
    
    
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
  addTocart(menu:Menu):void{
    
    // converted string to object from the local storage if exist or else will create an empty array 
    let existedObject=JSON.parse(localStorage.getItem('cart')??'[]');
   
    let cartmenu:Cartmenu=new Cartmenu(menu. foodId,menu.name,menu.price,menu.image,menu.tag,1);
      
      
      
    // will push the menu object when clicked on the addcart button 
    
    let i:number=0;
    let flag=false;
    if(existedObject.length===0){
      console.log("empty");
      existedObject.push(cartmenu);
      localStorage.setItem('cart',JSON.stringify(existedObject));
    }
    else{
      for(let existedObjects of existedObject){
        if(existedObjects.foodId===cartmenu.foodId){
         flag=true;
          break;
        }
      }
      console.log("is existed:"+flag);
      
      if(!flag){
        existedObject.push(cartmenu);
        localStorage.setItem('cart',JSON.stringify(existedObject));
        console.log("added to cart")
      }else{
        console.log("alredy exist ")
      }
      
  //  do{
  //   console.log(i);
  //   console.log("before adding "+existedObject.length)

  //    if(existedObject[i].foodId!==menu.foodId ){
  //       existedObject.push(menu);
  //        // stores the array of object to the local storage
  //     localStorage.setItem('cart',JSON.stringify(existedObject));
  //     console.log("not same ,existing value"+existedObject[i].foodId+" menu value    :"+menu.foodId+"menu added to cart");
  //     break;
      
  //     }else{
  //       console.log("duplicate value ,existing value"+existedObject[i].foodId+"  menu value   :"+menu.foodId+"not added");
       
    
  //     } 
  //     console.log("aftre adding "+existedObject.length)
  //     i++;
  //     console.log(i);
  //     // break;
      
      
  //   }while(i<existedObject.length)
  }
    
    
    
  
   
    // existedObject.push(menu);
    // localStorage.setItem('cart',JSON.stringify(existedObject));
    // console.log(menu);


  }
}

