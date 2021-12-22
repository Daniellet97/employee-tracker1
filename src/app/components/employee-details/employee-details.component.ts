import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Employees } from 'src/app/Employees';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() selectedEmployees!: Employees[]
@Output() editedEmployee = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedEmployees)
  }
  submitBtn():void{
    this.editedEmployee.emit(this.selectedEmployees)
  }

}
