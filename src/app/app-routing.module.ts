import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

const routes: Routes = [
    {
      path:"",
      component:HomePageComponent
    },
    {
      path:"employees",
      component:EmployeesComponent
    },
    {
      path:"employees/:id",
      component:EmployeeDetailsComponent
    },
    {
      //move to the home page if the user writes letters
      path:"**",
      redirectTo:''
    },
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
