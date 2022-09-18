import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-projectlogin',
  templateUrl: './projectlogin.component.html',
  styleUrls: ['./projectlogin.component.css']
})
export class ProjectloginComponent implements OnInit {

  constructor(){}

  onLogin(form:  NgForm){
    if(form.invalid){
      alert("Please enter valid data");
      return;

    }else{
    alert("Logging in...");
    }
  };

  ngOnInit(): void {
  }

}
