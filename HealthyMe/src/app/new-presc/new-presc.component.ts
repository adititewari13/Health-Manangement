import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-presc',
  templateUrl: './new-presc.component.html',
  styleUrls: ['./new-presc.component.css']
})
export class NewPrescComponent implements OnInit {
  user:any;
  constructor(public router:Router,public service:HealthService) {
    this.user={
      email:"",
      medicines:"",
      diagnosis:"",
      comments:""
    }
   }

  ngOnInit(): void {
  }
  newPresc(){

    const user1:JSON = <JSON><unknown>{

     
      "email":this.user.email,
      "prescription":{"medicines":this.user.medicines,"diagonsis":this.user.diagnosis,"comments":this.user.comments},
      "doctor_details":{"email":this.service.userId}
      };
      this.service.newPrescs(user1).subscribe((resultg: any )=> {console.log(resultg);});
    console.log(user1);
  }

  userLogout(){
    //this.router.navigate(['']);
     if(this.service.isUserLogged){
      //localStorage.removeItem('token');
       this.service.isUserLogged = false;
       this.router.navigate(['']);
    }
    // alert(this.service.isUserLogged);
    // this.service.isUserLogged = false;
    // this.router.navigate(['']);
  
  }
}
