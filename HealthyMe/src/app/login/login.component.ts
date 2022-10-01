import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //user:any;

  constructor(public router: Router,public service: HealthService,private toastr: ToastrService) { 
    //this.user ={type:"Doctor",email:"",password:""}
  }

  ngOnInit(): void {
  }
  userlogin(loginForm: any):any{
    //console.log(loginForm.usertype);
    this.service.userLogIn(loginForm).subscribe((result: any )=> {

      if(result.flag === 1 && loginForm.usertype === "doctors"){
        this.service.setUserLoggedIn(loginForm.email);
        this.toastr.success(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
        console.log(this.service.isUserLogged);
        this.router.navigate(['doc_header']);
      }
      if(result.flag === 1 && loginForm.usertype === "patients"){
        this.service.setUserLoggedIn(loginForm.email);
        this.toastr.success(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
        this.router.navigate(['pat_header']);
      }
      if(result.flag === 1 && loginForm.usertype === "lab"){
        this.service.setUserLoggedIn(loginForm.email);
        this.toastr.success(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
        this.router.navigate(['new_lab_rep']);
      }
      this.toastr.error(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    });
  }
}