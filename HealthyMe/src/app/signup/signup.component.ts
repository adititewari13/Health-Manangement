import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  dropdown1 = '';
  pass ='';
  cnfpass ='';

  constructor(public router: Router,public service: HealthService, private toastr: ToastrService) { }

  isSame(){
    return this.pass === this.cnfpass;
  }

  onSignup(signupForm: any){
    if(signupForm.invalid){
      //alert("Please enter valid data");
      this.toastr.error("Please Enter a valid data",'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    }
    else{
      signupForm.value.usertype = this.dropdown1;
      console.log(signupForm.value);
      this.service.userRegister(signupForm.value).subscribe((result: any) => {
        // alert(result.message);
        if(result.flag === 1){
          this.toastr.success(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
          this.router.navigate(['login']);
        }
        this.toastr.error(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
      });
    }
  };

  ngOnInit(): void {
  }
}