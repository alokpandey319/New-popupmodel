import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() name:any;
  @Output() public data= new EventEmitter<any>();


  constructor() {

   }

  ngOnInit(): void {
    this.data.emit("my name is Alok")
  }

}
