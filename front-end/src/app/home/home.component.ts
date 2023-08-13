import {Component, OnInit} from '@angular/core';
import {http} from "../http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    products:any
    constructor(private Request:http) {
    }
    ngOnInit() {
      this.Request.GetProducts("").subscribe((response)=>{
        this.products=response;
      })
      document!.getElementById("add")!.classList!.add("hide");
      document!.getElementById("fail")!.classList!.add("hide");

    }
    SearchProduct(event:any){
      let name=event.target.value;
        this.Request.GetProducts(name).subscribe((response)=>{
          this.products=response;
        })
      }

      AddToCart(product:any){
        if(sessionStorage.getItem(product.ProductId)){
          document!.getElementById("fail")!.classList!.add("show")
          document!.getElementById("failure")!.classList!.add("z-1");
          setTimeout(()=>{
            document!.getElementById("fail")!.classList!.replace("show","hide")
            document!.getElementById("failure")!.classList!.remove("z-1")
          },2000)

        }else{
          sessionStorage.setItem(product.ProductId.toString(),JSON.stringify(product));
          document!.getElementById("add")!.classList!.add("show")
          document!.getElementById("success")!.classList!.add("z-1");

          setTimeout(()=>{
            document!.getElementById("add")!.classList!.replace("show","hide")
            document!.getElementById("success")!.classList!.remove("z-1")
          },2000)
        }
      }

}
