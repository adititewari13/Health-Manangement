import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-header',
  templateUrl: './doc-header.component.html',
  styleUrls: ['./doc-header.component.css']
})
export class DocHeaderComponent implements OnInit {

  constructor(public router : Router,public service: HealthService) { }

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