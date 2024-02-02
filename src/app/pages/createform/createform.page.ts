import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';
import { HttpClient } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.page.html',
  styleUrls: ['./createform.page.scss'],
})
export class CreateformPage implements OnInit {
  ratingsForm: FormGroup;
  ratingData: any;
  detail: any;
  entries: any[] = [];
  totalSum = 0;
  appraisalInfo: any = {};
  appraisalId: string;
  employeeName: string;
  designation: string;
userId: any=localStorage.getItem('userId');

  constructor(private formBuilder: FormBuilder,private reviewservice: ReviewService ,private http: HttpClient
    ,private commonService: CommonService,private route: ActivatedRoute) {
    this.ratingsForm = this.formBuilder.group({

      employeeName: [''],
      appraisalId: [''],
      email: [''],
      designation: ['']
    });
   }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.appraisalId = params.appraisalId;
      this.employeeName = params.employeeName;
      this.designation = params.designation;
    });

    this.ratingsForm = this.formBuilder.group({
      communicationexcellent: false,
      communicationverygood: false,
      communicationgood: false,
      communicationaverage: false,
      interpersonalexcellent: false,
      interpersonalverygood: false,
      interpersonalgood: false,
      interpersonalaverage: false,
      abilityexcellent: false,
      abilityverygood: false,
      abilitygood: false,
      abilityaverage: false,
      solvingexcellent: false,
      solvingverygood: false,
      solvinggood: false,
      solvingaverage: false,
      flexibilityexcellent: false,
      flexibilityverygood: false,
      flexibilitygood: false,
      flexibilityaverage: false,
      willingnessexcellent: false,
      willingnessverygood: false,
      willingnessgood: false,
      willingnessaverage: false,
      perfectexcellent: false,
      perfectverygood: false,
      perfectgood: false,
      perfectaverage: false,
      habitsexcellent: false,
      habitsgood: false,
      habitsverygood: false,
      habitsaverage: false,
      presentationexcellent: false,
      presentationgood: false,
      presentationverygood: false,
      presentationaverage: false,
      punctualityexcellent: false,
      punctualitygood: false,
      punctualityverygood: false,
      punctualityaverage: false,
      inexcellent: false,
      ingood: false,
      inverygood: false,
      inaverage: false,
      wiexcellent: false,
      wigood: false,
      wiverygood: false,
      wiaverage: false,
      teamexcellent: false,
      teamgood: false,
      teamverygood: false,
      teamaverage: false,
      colleaguesexcellent: false,
      colleaguesgood: false,
      colleaguesverygood: false,
      colleaguesaverage: false,
      makingexcellent: false,
      makinggood: false,
      makingverygood: false,
      makingaverage: false,
      skexcellent: false,
      skgood: false,
      skverygood: false,
      skaverage: false,



    });

  }

  onsubmit() {
    // this.commonService.presentLoading1();
    // console.log('payload',payload);
    const userId = +localStorage.getItem('userId');
    this.reviewservice
      .submitRatings({
        appraisalId:1,
        employeeId: userId,
        employeeIdMiddleware: userId,
        permissionName: 'Tasks',
        sum: this.totalSum,
        communicationSkill:'1',
        communicationSkillRemarks:'testing',
        interpersonalSkill:'2',
        interpersonalSkillRemarks:'testing',
        abilityToPlanTheWork:'3',
        abilityToPlanTheWorkRemarks:'testing',

      })
      .then(
        (res: any) => {
          console.log('response', res);

        },
        (error) => {
          this.commonService.showToast('error', error.error.msg);
        }
      );
  }

  // total sum of ratings
  handleCheckboxChange(controlName: string, event: any, skillGroup: string) {
    const checked = event.detail.checked;
    let numericValue = null;
    const rowControls = ['excellent', 'verygood', 'good', 'average'];

    if (checked) {
      // Uncheck other checkboxes in the same row
      rowControls.forEach((rowControl) => {
        if (rowControl !== controlName) {
          this.ratingsForm.get(`${skillGroup}${rowControl}`)?.setValue(false);
        }
      });
    if (checked) {
      switch (controlName) {
        case 'excellent':
          numericValue = 5;
          this.ratingsForm.get('excellent')?.setValue(true);
          break;
        case 'verygood':
          numericValue = 4;
          this.ratingsForm.get('verygood')?.setValue(true);
          break;
        case 'good':
          numericValue = 3;
          this.ratingsForm.get('good')?.setValue(true);
          break;
        case 'average':
          numericValue = 2;
          this.ratingsForm.get('average')?.setValue(true);
          break;
      }
    } else {
      numericValue = null;
    }

    // Update the total sum
    if (checked) {
      this.totalSum += numericValue;
      console.log(`Numeric value for ${controlName}: ${numericValue}`);
      console.log(`Total sum: ${this.totalSum}`);
    } else {
      this.totalSum -= numericValue;
      console.log(`Numeric value for ${controlName}: ${-numericValue}`);
      console.log(`Total sum: ${this.totalSum}`);
    }
  }

  // handleRemarksChange(skill: string, event: any) {
  //   const remarks = event.detail.value;
  //   console.log(`Remarks for : ${remarks}`);

  // }
}










}








