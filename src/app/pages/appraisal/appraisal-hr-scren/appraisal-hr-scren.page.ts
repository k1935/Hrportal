import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { AppraisalService } from '../../../services/appraisal.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-appraisal-hr-scren',
  templateUrl: './appraisal-hr-scren.page.html',
  styleUrls: ['./appraisal-hr-scren.page.scss'],
})
export class AppraisalHrScrenPage implements OnInit {
  data1: any;
  fetch: any;
  fetchEmployee: any;
  employees: any;
  segment: any ;
  filterTerm: any;
  departmentName: any;
  constructor(
    public modalController: ModalController,
    public authService: AuthService,
    public router: Router,
    public commonService: CommonService,
    public appraisalService: AppraisalService
  ) {
    this.data1 = localStorage.getItem('userId');
  }
ngOnInit() {
  this.fetchDepartment();
  // this.fetchMainScreenList();
}
fetchDepartment() {
  const formData = {
    permissionName: 'Tasks',
    employeeIdMiddleware: this.data1,
    employeeId: this.data1,
  };
  this.appraisalService.department(formData).then((data: any) => {
    this.fetch = data;
    // console.log("fetch",data);
  });
}
onSelectionChange(data){
  this.departmentName=data.detail.value;
this.fetchMainScreenList();

}
fetchMainScreenList(){
  const formData = {
    permissionName: 'Tasks',
    employeeIdMiddleware: this.data1,
    employeeId: this.data1,
    name: this.departmentName,
  };
  console.log("mainScreen",formData);
  this.appraisalService.mainScreenList(formData).then((data: any) => {
    this.fetchEmployee = data;
  });
}
viewForm() {
  this.router.navigate(['/appraisa-view-scren/']);
}

searchEmployee(event: any) {
  const searchTerm: string = event.detail.value;

  console.log('Search Term:', searchTerm);

  if (!searchTerm) {
    this.fetchEmployee = [...this.data1];
    console.log('Data Reset:', this.fetchEmployee);
    return;
  }

  this.fetchEmployee = this.data1.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered Data:', this.fetchEmployee);
}
// segmentChanged(ev) {
//   this.offset = 0;
//   this.status = ev.target.value;
//   this.allTickets = [];
//   if (this.status == 'All') this.status = null;
//   this.fetchTicket();
// }
initiate(){
  this.router.navigate(['/initiate-appraisal']);
}
create(){
  this.router.navigate(['/workflow-setup']);
}


}
