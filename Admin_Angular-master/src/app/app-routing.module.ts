import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ChangeuserComponent } from './changeuser/changeuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { MenuslistComponent } from './menuslist/menuslist.component';
import { EditmenuComponent } from './editmenu/editmenu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AuthGuard } from './auth.guard';
import { AdminAuthGuard } from './adminauth.guard';
import { SearchedmenuComponent } from './searchedmenu/searchedmenu.component';
import { UsercartComponent } from './usercart/usercart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminordersComponent } from './adminorders/adminorders.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdmindashboardComponent,
    canActivate: [AdminAuthGuard]
    

  },
  {
    path: 'userlist',
    component: ChangeuserComponent,
    canActivate: [AdminAuthGuard]

  },
  {
    path: 'edituser',
    component: EdituserComponent,
    canActivate: [AdminAuthGuard]

  },
  {
    path: 'adduser',
    component: AdduserComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'menus',
    component: MenuslistComponent,
    canActivate: [AdminAuthGuard]

  },
  {
    path: 'editmenu',
    component: EditmenuComponent,
    canActivate: [AdminAuthGuard]

  },
  {
    path: 'addmenu',
    component: AddmenuComponent,
    canActivate: [AdminAuthGuard]

  },
  {
    path: 'usernavbar',
    component: UsernavbarComponent
  },
  {
    path: 'menu',
    component: UsermenuComponent
  },
  {
    path: 'login',
    component: UserloginComponent
  },
  {
    path:'register',
    component:UserregisterComponent
  },
  {
    path:'cart',
    component:UsercartComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'orders',
    component:AdminordersComponent,
    canActivate: [AdminAuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
