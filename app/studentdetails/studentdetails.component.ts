import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
title(event:any){
  console.log(event)
}
}
