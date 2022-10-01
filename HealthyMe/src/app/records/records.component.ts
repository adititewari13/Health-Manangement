import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthService } from '../health.service';
console.log("user id for class ");
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  showPortal = false;
  showTable: boolean = false;
  showTable1: boolean = false;
   prescriptionlocal: any[] = [];
   prescriptionlocal1: any[] = [];
  user:any;
  filePath='';
  constructor(public service:HealthService, public router:Router) {
      this.user={
        email:this.service.userId
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
    console.log("here user "+this.service.userId);
    this.prescriptionlocal=[];
    this.service.getPrescs(this.service.userId).subscribe((result: any )=> {console.log("presc "+result.comments);
    console.log(this.service.userId+ "here");
      result.forEach((val: any) => this.prescriptionlocal.push(Object.assign({}, val)));});
    // {result.forEach((val: any) => this.prescriptionlocal.push(Object.assign({}, val)));
    // console.log("leng"+result.length);
    //   alert(this.prescriptionlocal[3].prescription.medicines)});
    
  }
  async getLabs(){
    
    this.prescriptionlocal1=[];    
    await this.service.getLabRep(this.service.userId).subscribe((result: any )=> {
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
