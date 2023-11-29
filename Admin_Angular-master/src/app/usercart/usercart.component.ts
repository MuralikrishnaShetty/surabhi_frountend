import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Menu } from '../classes/menu';
import { NgZone } from '@angular/core';
import { Cartmenu } from '../classes/cartmenu';


@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsercartComponent {
  constructor(private ngZone: NgZone, private crf: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getcart();
    this.calculateTotalPrice();

  }

  quantityChange(id:number,quant:number){
    let existedObject = JSON.parse(localStorage.getItem('cart') ?? '[]');
    let IndexToChange = existedObject.findIndex((obj: { foodId: number }) => obj.foodId === id);
    let objectToChange = existedObject[IndexToChange];
    objectToChange.quantity=quant;
    existedObject[IndexToChange]=objectToChange; 
    localStorage.setItem('cart', JSON.stringify(existedObject));
    location.reload();
  }
  quantity=1;

  loggedIn() {
    return !!localStorage.getItem('userName')
  }

  //  to store menu object 
  menus: Menu[] = [];
  cartmenus:Cartmenu[]=[];
  //  geting length of the cart
  lengthOfTheCart = 0
  totalPriceOfProduct: number = 0

  calculateTotalPrice() {
    for (let menu of this.cartmenus) {
      this.totalPriceOfProduct = this.totalPriceOfProduct + (menu.quantity*menu.price);
    }
  }
  deleteAll() {
    localStorage.removeItem('cart');
    this.menus = this.menus.filter((menu) => menu.foodId !== menu.foodId);
    this.totalPriceOfProduct = 0;
    this.lengthOfTheCart = 0
  }
  deleteById(value: number) {
    let existedObject = JSON.parse(localStorage.getItem('cart') ?? '[]');
    let IndexToDelete = existedObject.findIndex((obj: { foodId: number }) => obj.foodId === value);
    console.log(IndexToDelete);
    console.log(value);
    if (IndexToDelete !== -1) {
      existedObject.splice(IndexToDelete, 1);
      // this.getcart();
      location.reload();
      console.log("deleted");
    }
    localStorage.setItem('cart', JSON.stringify(existedObject));

  }
  





  getcart() {
    // getting all the cart values that stored in the localstorge
    let existedObject = JSON.parse(localStorage.getItem('cart') ?? '[]');
    this.cartmenus = existedObject;
    this.lengthOfTheCart = this.cartmenus.length;
    

  }
  isempty():boolean{
    let existedObject=JSON.parse(localStorage.getItem('cart')??'[]');
    if(existedObject.length===0){
      return true;
    }else{
      return false;
    }
  }



}
