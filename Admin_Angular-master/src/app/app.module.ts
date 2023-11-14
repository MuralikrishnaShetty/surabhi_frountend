import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeuserComponent } from './changeuser/changeuser.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { MenuslistComponent } from './menuslist/menuslist.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeuserComponent,
    AdmindashboardComponent,
    EdituserComponent,
    AdduserComponent,
    MenuslistComponent,
    EditmenuComponent,
    AddmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
