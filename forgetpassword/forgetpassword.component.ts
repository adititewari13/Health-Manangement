import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  newpass='';
  cnfpass='';

  constructor() { }

  isSame(){
    return this.newpass===this.cnfpass;
  }

  FSubmit(){
    alert('Your password has been successfully reset!!');
  }

  ngOnInit(): void {
  }

}
