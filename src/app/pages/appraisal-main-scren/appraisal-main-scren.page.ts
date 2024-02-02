import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appraisal-main-scren',
  templateUrl: './appraisal-main-scren.page.html',
  styleUrls: ['./appraisal-main-scren.page.scss'],
})
export class AppraisalMainScrenPage implements OnInit {

  constructor(private router: Router) {}

  goToEmployeeEvaluation(){
    this.router.navigate(['/employee-evaluation']);
  }
  goTohrscreen(){
    this.router.navigate(['/appraisal-hr-scren']);
  }
  ngOnInit() {
  }


}
