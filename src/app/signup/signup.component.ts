import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dropdown1 = '';
  pass ='';
  cnfpass ='';
  

  constructor( public router:Router, private toastr:ToastrService ) { }


  isSame(){
    return this.pass === this.cnfpass;
  }

 

  onSignup(signupForm: any){
    if(signupForm.invalid){
      this.toastr.error('Please check your information','ERROR',{timeOut:3000,progressBar:true, progressAnimation:'increasing'});
    }
    else{
    this.toastr.success('Creating the account!!','INFO',{timeOut:3000,progressBar:true,progressAnimation:'increasing'});
    }
  };


  ngOnInit(): void {
  }

}
