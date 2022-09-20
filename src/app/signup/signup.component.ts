import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dropdown1 = '';
  pass ='';
  cnfpass ='';

  constructor(public router: Router) { }

  isSame(){
    return this.pass === this.cnfpass;
  }

  onSignup(signupForm: any){
    if(signupForm.invalid){
      alert("Please enter valid data");
    }
    else{
    alert("Creating new Account");
    }
  };

  ngOnInit(): void {
  }
}
