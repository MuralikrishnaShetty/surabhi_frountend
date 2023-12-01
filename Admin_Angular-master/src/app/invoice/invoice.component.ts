import { Component } from '@angular/core';
import { Cartmenu } from '../classes/cartmenu';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  ngOnInit(): void {
    
    this.calculateTotalPrice();
    this.userName

  }
  userName=localStorage.getItem('userName')
   invoices=JSON.parse(localStorage.getItem('cart')??'[]');
   currentDate = new Date();
   totalPrice:number=0;
   cartmenus:Cartmenu[]=[];
   calculateTotalPrice() {
    console.log(this.totalPrice);
    this.cartmenus=this.invoices;
    for (let menu of this.cartmenus) {
      
      this.totalPrice = this.totalPrice + (menu.quantity*menu.price);
      
      
    }
  }


}
