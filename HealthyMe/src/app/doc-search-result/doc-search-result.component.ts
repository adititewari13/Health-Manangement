import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';


console.log("cons");
@Component({
  selector: 'app-doc-search-result',
  templateUrl: './doc-search-result.component.html',
  styleUrls: ['./doc-search-result.component.css']
})
export class DocSearchResultComponent implements OnInit {
  showPortal = false;
  showTable: boolean = false;
  showTable1: boolean = false;
   prescriptionlocal: any[] = [];
   prescriptionlocal1: any[] = [];
  user:any;
  filePath='';
  constructor(public service:HealthService, public router:Router) {
      this.user={
        email:""
      }
      this.showPortal = false;
   }

  ngOnInit(): void {
  }
  
  toggleShowTable(): void {
    this.showTable = !this.showTable;
}
toggleShowTable1(): void {
  this.showTable1 = !this.showTable1;
}
  getPrescsp(){
    console.log("here");
    this.prescriptionlocal=[];
    this.service.getPrescs(this.user.email).subscribe((result: any )=> {console.log("presc "+result.comments);
      result.forEach((val: any) => this.prescriptionlocal.push(Object.assign({}, val)));});
    // {result.forEach((val: any) => this.prescriptionlocal.push(Object.assign({}, val)));
    // console.log("leng"+result.length);
    //   alert(this.prescriptionlocal[3].prescription.medicines)});
    
  }
  async getLabs(){
    
    this.prescriptionlocal1=[];    
    await this.service.getLabRep(this.user.email).subscribe((result: any )=> {
      console.log("resuikt"+result.file_name);
        result.forEach((val: any) => this.prescriptionlocal1.push(val));
        
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

