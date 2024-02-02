import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AppraisalService } from 'src/app/services/appraisal.service';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-approval-screen',
  templateUrl: './approval-screen.page.html',
  styleUrls: ['./approval-screen.page.scss'],
})
export class ApprovalScreenPage implements OnInit {
  fetchManager: any;
  appraisalForm: FormGroup;
  selectedEmployee: any;
  selectedManager: any;
  selectedSecondManager: any;
  selectedThirdManager: any;
  data1: any = localStorage.getItem('userId');
  fetchManagerList: any;
  fetchHr: any;
  showManager: any[] = [];
  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private appraisalService: AppraisalService,
    private loadingController: LoadingController,
    private toast: ToastController
  ) {
    this.appraisalForm = this.formBuilder.group({
      selectedEmployee: ['', Validators.required],
      selectedManager: ['', Validators.required],
      secondManager: [''],
      thirdManager: [''],
      hr: ['', Validators.required],
    });
    this.showManager.forEach((user) => {
      user.isEditing = false;
    });
  }

  ngOnInit() {
    this.selectEmployeeManager();
    this.selectHrforEmployee();
    this.showEmployeeManager();
  }
  selectEmployeeManager() {
    const formData = {
      permissionName: 'Tasks',
      employeeIdMiddleware: this.data1,
      employeeId: this.data1,
    };

    this.appraisalService.selectManager(formData).then((data: any) => {
      this.fetchManager = data;

      // console.log('fetchManager', data);
    });
  }
  selectHrforEmployee() {
    const formData = {
      permissionName: 'Tasks',
      employeeIdMiddleware: this.data1,
      employeeId: this.data1,
    };
    // console.log('hey',formData);
    this.appraisalService.selectHr(formData).then((data: any) => {
      this.fetchHr = data;

      // console.log('fetchHr', data);
    });
  }
  showEmployeeManager() {
    const formData = {
      permissionName: 'Tasks',
      employeeIdMiddleware: this.data1,
      employeeId: this.data1,
    };
    console.log('hey', formData);
    this.appraisalService.employeeManagerFetch(formData).then((data: any) => {
      this.showManager = data;
      console.log('showManager', data);
    });
  }

  storeEmployeeManagerList() {
    const formData = {
      permissionName: 'Tasks',
      employeeIdMiddleware: this.data1,
      employeeId: this.data1,
      entries: [
        {
          employee: parseInt(this.appraisalForm.value.selectedEmployee),
          l2Manager: parseInt(this.appraisalForm.value.selectedManager),
          l3Manager: parseInt(this.appraisalForm.value.secondManager),
          l4Manager: parseInt(this.appraisalForm.value.thirdManager),
          l5Manager: parseInt(this.appraisalForm.value.hr),
        },
      ],
    };
    // console.log('hello', formData);
    this.appraisalService.employeeManagerStore(formData).then((data: any) => {
      this.fetchManagerList = data;
      this.presentToast();
      this.appraisalForm.reset();
    });
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Submitted successfully!',
      duration: 2000,
      position: 'top',
      color: 'success',
    });

    toast.present();
  }
  clearForm() {
    this.appraisalForm.reset();
  }
  // editUser(index: number): void {
  //   this.showManager[index].isEditing = true;
  //   const formData = {
  //     permissionName: 'Tasks',
  //     employeeIdMiddleware: this.data1,
  //     employeeId: this.data1,
  //     entries: [
  //       {
  //         l2Manager: this.data1.value.L2ManagerIdName,
  //         l3Manager: this.data1.value.L3ManagerIdName,
  //         l4Manager: this.data1.value.L4ManagerIdName,
  //         l5Manager: this.data1.value.L5ManagerIdName,
  //       },
  //     ],
  //   };
  //   console.log('hlo', formData);
  //   this.appraisalService.employeeManagerUpdate(formData).then((data: any) => {
  //     this.showManager = data;
  //   });
  // }

  // updateUser(index: number): void {
  // console.log("ggggggggg", index);
  //   this.showManager[index].isEditing = false;
  //   const formData = {
  //     permissionName: 'Tasks',
  //     employeeIdMiddleware: this.data1,
  //     employeeId: this.data1,
  //     entries: [
  //       {
  //         l2Manager: this.data1.value.L2ManagerIdName,
  //         l3Manager: this.data1.value.L3ManagerIdName,
  //         l4Manager: this.data1.value.L4ManagerIdName,
  //         l5Manager: this.data1.value.L5ManagerIdName,
  //       },
  //     ],
  //   };
  //   console.log('hlo', formData);
  //   this.appraisalService.employeeManagerUpdate(formData).then((data: any) => {
  //     this.showManager = data;
  //   });
  // }

  // cancelEdit(index: number): void {
  //   this.showManager[index].isEditing = false;
  // }
}
