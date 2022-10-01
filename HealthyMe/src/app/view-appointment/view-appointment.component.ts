import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  patients:any;
  patientlocal :any []= [];
  constructor(public service:HealthService, public router:Router) {
    this.patients={
      name:"",
      email:"",
      phone:"",
      problem:"",
      date:""
    }
   }
  ngOnInit(): void {
  }
  showApt() {
    console.log("here");
    this.patientlocal=[];
    this.service.showApt(this.service.userId).subscribe((result: any )=> {console.log(result);
      result.forEach((val: any) => this.patientlocal.push(Object.assign({}, val)));
    });
    console.log("this is patlocal"+this.patientlocal);
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
