import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router){}

  onLogin(loginForm: any){
    if(loginForm.invalid){
      alert("Please enter valid data");
      return;

    }else{
    alert("Logging in...");
    }
  };

  ngOnInit(): void {
  }

}
