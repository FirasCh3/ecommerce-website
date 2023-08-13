import {Component, OnInit} from '@angular/core';
import {http} from "../http";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    trigger("ShowHideAnimation",[
      state("true",style({opacity:1})),
      state("false",style({opacity:0})),
      transition('false <=> true', animate(1000))
    ])
  ]
})
export class CheckoutComponent implements OnInit{
  products:any
  show:boolean=false;
  group=new FormGroup({
    UserName:new FormControl("",[Validators.required]),
    UserAdress:new FormControl("",[Validators.required]),
    UserEmail:new FormControl("",[Validators.required,Validators.email])
  })
  ngOnInit() {
    this.products=[]
    for (var key in sessionStorage) {
      if(key!="token" && sessionStorage.getItem(key)!=null){
        this.products.push(JSON.parse(sessionStorage.getItem(key)!));
      }
    }
  }
  constructor(private Request:http,private router:Router) {
  }
  AddCommand(group:AbstractControl){
    if(group.valid){
      this.show=true;
      let command={
        UserName:group.get("UserName")?.value,
        UserAdress:group.get("UserAdress")?.value,
        UserEmail:group.get("UserEmail")?.value,
        product:this.products
      }
      this.Request.AddCommand(command).subscribe();
      setTimeout(()=>{
        this.show=false;
      },2000)
      setTimeout(()=>{
        this.router.navigate(["/"]).then();
      },3500)
    }else{
      return;
    }
    for(let key in sessionStorage){
      if(key!="token"){
        sessionStorage.removeItem(key);
      }
    }
  }
  SumOfProducts(){
    let sum:Number=0;
    for(let product of this.products){
      sum+=product.ProductPrice;
    }
    return sum
  }
  remove(ProductId:string){
   for(var  key in sessionStorage){
     if(key==ProductId){
       sessionStorage.removeItem(key);
     }
   }
    this.ngOnInit();
  }
}
