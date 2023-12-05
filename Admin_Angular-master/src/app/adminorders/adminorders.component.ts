import { Component } from '@angular/core';
import { Orders } from '../classes/orders';
import { ChangeUserService } from '../services/change-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent {
  orders:Orders[]=[];
  constructor(private service:ChangeUserService, private root:Router){}

  ngOnInit(): void {
    // Fetch initial user data
    this.getorder();
  }

  getorder():void{
    this.service.getAllOrders().subscribe(
      (res)=>{
        this.orders=res;
      },
      (err)=>{
        
        console.log(err);
        console.log("error")
      }

    )

  }

}
