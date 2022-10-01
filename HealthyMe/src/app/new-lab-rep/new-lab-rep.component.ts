import { Component, OnInit } from '@angular/core';
import { HealthService } from '../health.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-lab-rep',
  templateUrl: './new-lab-rep.component.html',
  styleUrls: ['./new-lab-rep.component.css']
})
export class NewLabRepComponent implements OnInit {
  user:any;
  images:any;
  multipleimages=[]
  constructor(public service:HealthService, public router:Router) { 
    this.user={
        email:"",
        path:"",
        comments:""
    }
  }

  ngOnInit(): void {
  }
  newLab(){
    const formdata=new FormData();

    formdata.append('file',this.images);
    formdata.append("email",this.user.email);
    formdata.append("comments",this.user.comments);
    this.service.newLabrep(formdata).subscribe((result: any )=> {console.log(result);
    });
  }
  selectImage(event:any){
    if(event.target.files.length>0){
      
      const file=event.target.files[0]
      console.log(file);
      this.images=file;
    }
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