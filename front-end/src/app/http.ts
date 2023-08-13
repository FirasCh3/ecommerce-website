import {HttpClient, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class http{
  constructor(private httpRequest:HttpClient) {
  }
  UploadFile(formData:FormData){
    return this.httpRequest.post("http://localhost:8080/AddFile",formData,{observe:"response"});
  }
  AddProduct(product:any){
    return this.httpRequest.post("http://localhost:8080/Add",product);
  }
  GetProducts(ProductName:string=""){
    return this.httpRequest.get("http://localhost:8080/find?ProductName="+ProductName);
  }
  Authenticate(LoginInfo:any){
    return this.httpRequest.post("http://localhost:8080/Auth",LoginInfo);
  }
  AddCommand(CommandInfo:any){
    return this.httpRequest.post("http://localhost:8080/AddCommand",CommandInfo);
  }
  GetCommands(){
    return this.httpRequest.get("http://localhost:8080/AllCommands");
  }
  DeleteCommand(CommandId:string){
    return this.httpRequest.delete("http://localhost:8080/DeleteCommand?CommandId="+CommandId);
  }

}
