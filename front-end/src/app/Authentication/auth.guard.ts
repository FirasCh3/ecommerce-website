import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  if(sessionStorage.getItem("token")){
    return true;
  }else{
    router.navigate(["/adminlogin"]).then();
    return false;
  }
};
