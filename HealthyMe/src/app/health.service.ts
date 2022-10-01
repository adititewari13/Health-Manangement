import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthService {
  isUserLogged:boolean;
  userId:any;
  //logDetails: any;

  constructor(public httpClient: HttpClient) {
    this.isUserLogged = false;
    //this.userId = '';
   }
   public setUserLoggedIn(employee:any): void{
    this.isUserLogged = true;
    //this.logDetails = this.isUserLogged;
    console.log(this.userId);
    this.userId = employee;
    console.log(this.userId);
   }
   public isLoggedin(): boolean{
    return this.userId === '';
   }
   userLogIn(user: any): any{
    console.log(user);
    return this.httpClient.post("http://localhost:3000/login",user);
   }
   userRegister(user: any): any{
    console.log(user);
    return this.httpClient.post("http://localhost:3000/register",user);
   }

   newPrescs(email:any):any{
    console.log("email"+email);
    return this.httpClient.post("http://localhost:3000/presc/" , email);
  }

  getLabRep(email:any):any{
    console.log("email lab"+email);
    return this.httpClient.get("http://localhost:3000/getLab/" + email);
  }
getPrescs(email:any):any{
    console.log("email"+email);
    return this.httpClient.get("http://localhost:3000/getpresc/" + email);
  }

  showApt(email:any):any{
    console.log("email email"+email);
    return this.httpClient.get("http://localhost:3000/getapt/" + email);
  }

  newApt(email:any):any{
    console.log("email email"+email);
    return this.httpClient.post("http://localhost:3000/newapt/" , email);
  }

  getdoc():any{
    return this.httpClient.get("http://localhost:3000/getdoc/");
  }

  newLabrep(email:any):any{
    console.log("email lab"+email);
    return this.httpClient.post("http://localhost:3000/newrep/" , email);
  }

  forgotPassword(user: any): any{
    console.log(user);
    return this.httpClient.post("http://localhost:3000/change",user);
   }
}