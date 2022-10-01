import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  user:any;
  constructor(public service:HealthService, public router:Router, public toastr:ToastrService) {
    this.user={
      name:"",
      doc_email:"",
      phone:"",
      problem:"",
      date:""
    }
   }

  ngOnInit(): void {
  }
  bookApt(){
    const user1:JSON = <JSON><unknown>{

      "name":this.user.name,
      "email":this.service.userId,
      "doc_email":this.user.doc_email,
      "phone": this.user.phone,
      "problem": this.user.problem,
      "date":this.user.date
      };
      this.toastr.success("Appointment Booked",'INFO',{timeOut:2000,progressBar:true,progressAnimation:'increasing'});
    console.log(user1);
    this.service.newApt(user1).subscribe((result: any )=> {console.log(result);

    });
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
