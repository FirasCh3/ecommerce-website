import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {RoutingModule} from "./routing/routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import {http} from "./http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgOptimizedImage} from "@angular/common";
import {AdminLoginComponent} from "./admin-login/admin-login.component";
import { AddProductComponent } from './add-product/add-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewCommandsComponent } from './view-commands/view-commands.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AdminLoginComponent,
    AddProductComponent,
    CheckoutComponent,
    ViewCommandsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    RouterLink
  ],
  providers: [http],
  bootstrap: [AppComponent]
})
export class AppModule { }
