import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "../admin/admin.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {authGuard} from "../Authentication/auth.guard";
import {AdminLoginComponent} from "../admin-login/admin-login.component";
import {AddProductComponent} from "../add-product/add-product.component";
import {CheckoutComponent} from "../checkout/checkout.component";
import {ViewCommandsComponent} from "../view-commands/view-commands.component";

const routes=[
  {path:"",component: HomeComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"checkout",component: CheckoutComponent},
  {path:"admin",component: AdminComponent,canActivate:[authGuard],children:[
      {path:"addproduct",component: AddProductComponent},
      {path:"viewcommands",component: ViewCommandsComponent}
    ]},
  {path:"**",component: HomeComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
