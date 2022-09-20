import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router , private toastr: ToastrService) { }

 

  onLogin(loginForm: any){
    if(loginForm.invalid){
      this.toastr.error('Please check your information','INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
      return;

    }else{
      this.toastr.success('Login Success','INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    }
  };



  ngOnInit(): void {
  }

}
