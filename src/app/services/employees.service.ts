import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  api = 'http://localhost:4100/employees'
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.api)
  }
}
