import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  url: any;

  constructor(private http: HttpClient) {
    this.url = "http://dummy.restapiexample.com/api/v1/employees";
  }

  getEmployees(): Observable<any> {
    return this.http.get(this.url);
  }
}
