import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit{
  BtnActive:Number=1;
  ngOnInit() {
    this.router.navigate(["admin/addproduct"]).then();
  }

  constructor(private router:Router) {
  }
  ActivateButton(BtnNumber:Number){
    this.BtnActive=BtnNumber;
  }
}
