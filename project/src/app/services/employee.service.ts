import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { //kreiran http servis http client

  }
  addEmployee(data: any) : Observable<any>{   //metoda u servisu koja ce pomocu POST metode dodavati svakog employee
    return this._http.post('http://localhost:3000/employees', data);   // metoda vraca observable response
  }

  getEmpList() : Observable<any>{ // servis za fetch data iz Emloyee List
    return this._http.get('http://localhost:3000/employees');   // metoda vraca observable response
  }
}
