import { Component, OnInit } from '@angular/core';
import {Employee2} from './employee2'

import {EmployeeService} from 'src/app/services/employee.service'

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor(private _empService:EmployeeService) { }

  ngOnInit() {
  }

}
