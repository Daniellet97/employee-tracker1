import { Component, OnInit, Type } from '@angular/core';
import { Employees } from 'src/app/Employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employees[] = [] 
  selectedEmployees: Employees[] =[]
  constructor(private serviceService: EmployeesService) { }

  ngOnInit(): void {
    this.serviceService.getEmployees().subscribe((employee)=>{ this.employees = employee; console.log(employee)})
    
  }

  onSelect(employee: Employees): void {
  this.selectedEmployees.push(employee);
  console.log(this.selectedEmployees)
  // this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
}
changeEmployee(){
  this.selectedEmployees = []
}
}
