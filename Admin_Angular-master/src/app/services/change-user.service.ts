import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Menu } from '../classes/menu';
import { BehaviorSubject } from 'rxjs';
import { Orders } from '../classes/orders';

@Injectable({
  providedIn: 'root'
})
export class ChangeUserService {
  // url for order
  private orderUrl="http://localhost:9091/order"

  //host for the menu
  private menuUrl="http://localhost:9091/menu";
  //host for the user
  private apiUrl = "http://localhost:9091/user";
  changeUserUrl = "http://localhost:9091/user/getall";
  constructor(private http:HttpClient) { }
   //get all user from the user database, and this is in change user component 
  getAllUser(){
    return this.http.get<User[]>(this.changeUserUrl);
  }
  //used to delete user and used in change user component 
  deleteUser(id:number){
    const deleteUrl = `${this.apiUrl}/delete/${id}`;
    return this.http.delete(deleteUrl);
  }

  //update the user and used in edit user component 
  updateData(id: number, newData: any) {
    const updateUrl = `${this.apiUrl}/update/${id}`;
    return this.http.put(updateUrl, newData);
  }
  // adding the user and used in  adduser component 
  addUser(data:any){
    const addUserUrl=`${this.apiUrl}/register`;
    return this.http.post(addUserUrl,data);
  }
  //get all menu from the databasse used in the menulist component 
  getAllMenu(){
    const getAllMenuUrl=`${this.menuUrl}/menus`;
    return this.http.get<Menu[]>(getAllMenuUrl);
  }
  // search food by name 
  findByName(name:string){
    const findByNameUrl=`${this.menuUrl}/${name}`;
    return this.http.get<Menu[]>(findByNameUrl);
  }
  //deleting menu from the database used in the menu list component
  deletemenu(id:number){
    const deleteMenuUrl=`${this.menuUrl}/delete/${id}`;
    return this.http.delete(deleteMenuUrl);
  }
  //adding the menu to the menu database used in the addmenu component 
  addMenu(data:any){
    const addMenuUrl=`${this.menuUrl}/add`;
    return this.http.post(addMenuUrl,data);
  }
  //updating the menu to the menu database used in the editmenu component
  updateMenu(id:number,updatedData:any){
    const updateUrl = `${this.menuUrl}/update/${id}`;
    return this.http.put(updateUrl, updatedData);

  }
  //login user used in the userlogin
  login(userdata:any){
    const loginurl=`${this.apiUrl}/login`;
    return this.http.post(loginurl,userdata);
  }
  //check wether the user is loged in or not 
  loggedIn() {
    return !!localStorage.getItem('userName') ;   
  }
  //get the tocken stored in localstorage 
  getToken() {
    return localStorage.getItem('userName');
  }
  //cheking is the admin or not to implement authgard separate for admin and user 
  isAdmin(): boolean {
    const isAdminValue = localStorage.getItem('isAdmin');
    
    if (isAdminValue === 'true') {
      console.log("This is the response from the service: true");
      return true;
    } else {
      console.log("This is the response from the service: false");
      return false;
    }
  }
  
  //geting all order 
  getAllOrders(){
    const getAllOrderUrl=`${this.orderUrl}/orders`;
    return this.http.get<Orders[]>(getAllOrderUrl);

  }
  // posting orders
  postOrder(data:any[]){
    const postOrderUrl=`${this.orderUrl}/add`;
    return this.http.post(postOrderUrl,data);
  }

 
  

  


}
