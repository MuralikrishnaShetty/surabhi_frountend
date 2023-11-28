import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeuserComponent } from './changeuser/changeuser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { MenuslistComponent } from './menuslist/menuslist.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { SearchedmenuComponent } from './searchedmenu/searchedmenu.component';
import { UsercartComponent } from './usercart/usercart.component';
import { EmptycartComponent } from './emptycart/emptycart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeuserComponent,
    AdmindashboardComponent,
    EdituserComponent,
    AdduserComponent,
    MenuslistComponent,
    EditmenuComponent,
    AddmenuComponent,
    UsernavbarComponent,
    UsermenuComponent,
    UserloginComponent,
    UserregisterComponent,
    SearchedmenuComponent,
    UsercartComponent,
    EmptycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
