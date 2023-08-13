import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {http} from "../http";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  animations:[
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', animate('1s ease-in-out')),
    ]),
  ],
})
export class AddProductComponent {
  UploadError:boolean=false;
  image:any;
  ImageRequired:boolean=false;
  SuccessAlert:boolean=true;
  group=new FormGroup({
    ProductName:new FormControl("",Validators.required),
    ProductPrice:new FormControl("",[Validators.required,Validators.min(0),Validators.pattern("^[0-9]*$")]),
    ProductDescription:new FormControl(""),
    picture:new FormControl("",Validators.required,this.FileValidator.bind(this))
  })
  constructor(private Request:http) {
  }
  FormatPrice(){
    let TnDinar = new Intl.NumberFormat('TND',{
      style:"currency",
      currency:"TND",
      maximumSignificantDigits: 3
    });
    let price=document.getElementById("exampleFormControlInput2") as HTMLInputElement;
    let value:string=price?.value;
    console.log(TnDinar.format(parseInt(value)));
    (document.getElementById("exampleFormControlInput2") as HTMLInputElement).value= TnDinar.format(parseInt(value));
  }
  FileValidator(PictureControl:AbstractControl):Promise<any>{
    return new Promise((resolve) => {
      let AllowedExtensions:string[]=["jpg","jpeg","png"]
      let path=PictureControl.value;
      let extension=path.slice(path.lastIndexOf(".")+1,path.length)
      if(AllowedExtensions.indexOf(extension)==-1){
        resolve({ImageError:true});
      }else{
        resolve(null);
      }

    });

  }
  GetFile(event:any){
    this.image=event.target.files[0];
    if(this.image){
      this.ImageRequired=false;
    }
  }

  submit(group:AbstractControl){
    let ProductInfo;
    if(group.valid){
      const id = crypto.randomUUID();
      if(this.image){
        let formData:FormData=new FormData()
        let imageName=this.image.name;
        let extension=imageName.slice(imageName.lastIndexOf("."),imageName.length);
        formData.append("file",this.image,id+extension);
        this.Request.UploadFile(formData).subscribe((Response)=>{
          if(Response.status!=200){
            this.UploadError=true;
          }
        });
        ProductInfo=group.value;
        ProductInfo["ProductId"]=id;
        delete ProductInfo["picture"];
        this.Request.AddProduct(ProductInfo).subscribe();
        this.SuccessAlert=false
        setTimeout(()=>{

          this.SuccessAlert=true;
          group.reset();
        },4000)

      }
    }else{
      this.ImageRequired=true;
      return;
    }

  }
}
