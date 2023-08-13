import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {http} from "../http";
import {map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  group=new FormGroup({
    name:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  },[])
  authenticated:boolean=true;

  constructor(private Request:http,private router:Router) {
  }
  ngOnInit() {
    sessionStorage.clear();
  }

  submit(group:any){
    if(this.group.valid){
    this.Request.Authenticate(group).subscribe((response:any)=>{
      if(response!=null){
        sessionStorage.setItem("token",response.token);
        this.router.navigate(["/admin"]).then();
      }else{
        this.authenticated=false;
      }
    })
    }else{
      return;
    }
  }
}
