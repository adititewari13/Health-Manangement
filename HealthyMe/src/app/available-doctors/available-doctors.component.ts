import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-available-doctors',
  templateUrl: './available-doctors.component.html',
  styleUrls: ['./available-doctors.component.css']
})
export class AvailableDoctorsComponent implements OnInit {

  constructor(public service:HealthService, public router:Router) { }
  prescriptionlocal: any[] = [];
  ngOnInit(): void {
   
    console.log("here");
    this.prescriptionlocal=[];
    this.service.getdoc().subscribe((result: any )=> {console.log("presc "+result);
      // result.forEach((val: any) => this.prescriptionlocal.push(Object.assign({}, val)));
      this.prescriptionlocal=result;
    });
  }

  getDocs(){
  
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
