import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Menu } from '../classes/menu';

@Injectable({
  providedIn: 'root'
})
export class ChangeUserService {
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

}
