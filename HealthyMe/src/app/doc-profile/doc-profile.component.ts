import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-profile',
  templateUrl: './doc-profile.component.html',
  styleUrls: ['./doc-profile.component.css']
})
export class DocProfileComponent implements OnInit {

  constructor(public service:HealthService, public router:Router) { }

  ngOnInit(): void {
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
