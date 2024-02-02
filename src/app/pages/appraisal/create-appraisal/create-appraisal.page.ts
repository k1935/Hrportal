import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AppraisalService } from 'src/app/services/appraisal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-create-appraisal',
  templateUrl: './create-appraisal.page.html',
  styleUrls: ['./create-appraisal.page.scss'],
})
export class CreateAppraisalPage implements OnInit {
  fetchDepartment: any;
  data1: any = localStorage.getItem('userId');
  fetchEmployee: any;
  amountForm: any;
  appraisalAmount: any;
  constructor(
    private activated: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private appraisalService: AppraisalService,
    private toast: ToastController
  ) {

    this.amountForm = this.formBuilder.group({
      department: ['', Validators.required],
      designation: ['', ],
      year: ['',],
      excellentAmount: [''],
      veryGoodAmount: [''],
      goodAmount: [''],
      averageAmount: [''],
    });
  }
  ngOnInit() {
    this.getDepartment();
    // this.saveEmployeeAppraisalAmount();
  }

  getDepartment() {
    const formData = {
      permissionName: 'Tasks',
      employeeIdMiddleware: this.data1,
      employeeId: this.data1,
    };
    this.appraisalService.department(formData).then((data: any) => {
      this.fetchDepartment = data;
      // console.log("fetch",data);
    });
  }

  saveEmployeeAppraisalAmount(){
    // console.log(this.amountForm.value);
   const formData = {
    permissionName:'Tasks',
    employeeIdMiddleware:this.data1,
    employeeId:this.data1,
    name:this.amountForm.value.name,
    designation:this.amountForm.value.designation,
    year:this.amountForm.value.year,
    ExcellentAmount:this.amountForm.value.excellentAmount,
    VgoodAmount:this.amountForm.value.veryGoodAmount,
    GoodAmount:this.amountForm.value.goodAmount,
    AverageAmount:this.amountForm.value.averageAmount
   };
  //  console.log ("hello", formData);
   this.appraisalService.employeeAppraisalAmount(formData).then((data: any) => {
    this.appraisalAmount = data;
    // console.log("hyy", data);
    this.presentToast();
      this.amountForm.reset();
   });
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Submitted successfully!',
      duration: 200,
      position: 'bottom',
      color: 'success',
    });

    toast.present();
  }
  clearForm() {
    this.amountForm.reset();
  }
}
