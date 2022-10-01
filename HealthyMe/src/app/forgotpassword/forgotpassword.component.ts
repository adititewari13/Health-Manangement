import { Component, OnInit } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
   newpass='';
  cnfpass='';
  details:any;

  constructor(private toastr: ToastrService,public router: Router,private service: HealthService) { }

  isSame(){
    return this.newpass===this.cnfpass;
  }

  FSubmit(Forgetpasswordform:any){
    if(Forgetpasswordform.invalid){
      this.toastr.error('Please check your information','ERROR',{timeOut:2000,progressBar:true,progressAnimation:'increasing'})
    }
    else{
      this.toastr.success('Your Password has been reset!!','INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'})
    }
  }
  Change(Forgotpasswordform: any){
    delete Forgotpasswordform.value.cnfpassword;
    //console.log(Forgotpasswordform.value);
    this.service.forgotPassword(Forgotpasswordform.value).subscribe((result: any) =>{
      if(result.flag){
        this.toastr.success('Your Password has been reset!!','INFO',{timeOut:2000,progressBar:true,progressAnimation:'decreasing'});
        this.router.navigate(['login']);
      }
      else{
        this.toastr.error(result.message,'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
      }
    })
  }


  ngOnInit(): void {
  }
  
}