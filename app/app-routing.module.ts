import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [{
  
  path: '',redirectTo:'studentdetails',pathMatch:'full'

},
  {
    path:'student',component:StudentComponent
  },
  {
    path:'studentdetails',component:StudentdetailsComponent
  },
  {
    path:'**',component:PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
