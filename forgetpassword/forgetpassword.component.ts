import { Component, OnInit } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  newpass='';
  cnfpass='';

  constructor(private toastr: ToastrService) { }

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


  ngOnInit(): void {
  }

}
