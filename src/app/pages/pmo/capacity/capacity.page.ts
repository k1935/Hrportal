
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.page.html',
  styleUrls: ['./capacity.page.scss'],
})
export class CapacityPage implements OnInit {
  customers: any = [];
  timeframe: any = 'month'
  department: any = 'all';
  dropDownData: any;
allRequest:any=[
  {"emp_Code":1234,"emp_Name":"absd","Dep":"SAP","AvailHours":45,"AllocateHours":25},
  {"emp_Code":5834,"emp_Name":"absd","Dep":"Dev","AvailHours":45,"AllocateHours":28},
  {"emp_Code":9234,"emp_Name":"absd","Dep":"Recruitment","AvailHours":45,"AllocateHours":30},
  {"emp_Code":3534,"emp_Name":"absd","Dep":"HR","AvailHours":45,"AllocateHours":29},
]
  constructor(private router: Router, public commonService: CommonService) { }

  ngOnInit() {
   
  }

  selectionChanged(ev: any) {
    this.dropDownData = ev.detail
    console.log("data of dropdown list", this.dropDownData)
  }
  editDetails(data) {
   
    alert("edit popup");
  }

}
