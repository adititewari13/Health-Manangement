import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doc-search',
  templateUrl: './doc-search.component.html',
  styleUrls: ['./doc-search.component.css']
})
export class DocSearchComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
