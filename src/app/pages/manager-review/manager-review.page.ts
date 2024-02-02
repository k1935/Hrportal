import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-manager-review',
  templateUrl: './manager-review.page.html',
  styleUrls: ['./manager-review.page.scss'],
})
export class ManagerReviewPage implements OnInit {
  employeeForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      designation: ['', Validators.required],
      division: ['', Validators.required],
      careerLevel: ['', Validators.required],
      managerName: ['', Validators.required],
      employeeName: ['', Validators.required],
      joiningDate: ['', Validators.required],
      department: ['', Validators.required],
      reviewPeriod: ['', Validators.required],
      evaluationPurpose: ['', Validators.required],
      overallScore: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);

    } else {

    }
  }
}
