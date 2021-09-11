import { HostListener,   } from '@angular/core';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { FormGroup,FormControl,FormBuilder,NgForm,Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alok project';
signupForm:FormGroup;
showModel:boolean=false;
  

  
constructor(private frmbuilder:FormBuilder){
  this.signupForm=frmbuilder.group({
    'email': [null, Validators.compose([Validators.required, Validators.email])]
 
  });
}
makeRequestToResetLink(formData:any, valid: boolean) {
  if (valid) {

    this.showModel = false;
    alert("Are you sure want to submit this form!")
  }else{
    alert("Please enter valid email!");

  }
}

ngOnInit(){

}
// PostData()
// {
//   this.Firstname=this.signupForm.get('fname')?.value
//   console.log(this.Firstname);
// }


show(){
  console.log(this.signupForm.controls.fname.value)

}


}