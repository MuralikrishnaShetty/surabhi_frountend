import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChangeuserComponent } from './changeuser/changeuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MenuslistComponent } from './menuslist/menuslist.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';

const routes: Routes = [
 
  {
    path: 'admin',
    component: AdmindashboardComponent
  },
  {
    path:'userlist',
    component:ChangeuserComponent
    
  },
  {
    path:'edituser',
    component:EdituserComponent
    
  },
  {
    path:'adduser',
    component:AdduserComponent
    
  },
  {
    path:'menus',
    component:MenuslistComponent
    
  },
  {
    path:'editmenu',
    component:EditmenuComponent
    
  },
  {
    path:'addmenu',
    component:AddmenuComponent
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
