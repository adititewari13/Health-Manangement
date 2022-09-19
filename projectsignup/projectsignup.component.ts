import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectsignup',
  templateUrl: './projectsignup.component.html',
  styleUrls: ['./projectsignup.component.css']
})
export class ProjectsignupComponent implements OnInit {

  dropdown1 = '';
  pass ='';
  cnfpass ='';

  constructor() { }

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
