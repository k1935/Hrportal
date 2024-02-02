import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ReviewService } from 'src/app/services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.page.html',
  styleUrls: ['./reviewform.page.scss'],
})
export class ReviewformPage implements OnInit {
  reviewForm: FormGroup;
  detail: any;
  totalSum = 0;
  apiData: any;
  skills: [''];
  employeeRating: [''];
  employeeRemarks: [''];

  userId: any=localStorage.getItem('userId');

  constructor(private formBuilder: FormBuilder,
     private navCtrl: NavController,private route: ActivatedRoute,
     private reviewservice: ReviewService) {
    this.reviewForm = this.formBuilder.group({
      communicationRating: [''],
      interpersonalRating: [''],
      abilityRating: [''],
      solvingRating: [''],
      flexibilityRating: [''],
      willingnessRating: [''],
      perfectRating: [''],
      habitsRating: [''],
      presentationRating: [''],
      punctualityRating: [''],
      inRating: [''],
      wiRating: [''],
      teamRating: [''],
      colleaguesRating: [''],
      makingRating: [''],
      skRating: [''],
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.skills = params.skills;
      this.employeeRating = params.employeeRating;
      this.employeeRemarks = params.employeeRemarks;
    });
  }



  managerReview() {
    this.navCtrl.navigateForward(['/manager-review']);
  }
  handleDropdownChange(event: any, category: string) {
    this.reviewForm.get(category + 'Rating').setValue(event.detail.value);
    const ratingValues = {
      excellent: 5,
      verygood: 4,
      good: 3,
      average: 2
    };
    const selectedValue = event.detail.value;
    const numericValue = ratingValues[selectedValue];

    // Update the total sum
    if (selectedValue) {
      this.totalSum += numericValue;
      console.log(`Numeric value for ${category}: ${numericValue}`);
      console.log(`Total sum: ${this.totalSum}`);
     } else {
            this.totalSum -= numericValue;
            console.log(`Numeric value for ${category}: ${-numericValue}`);
            console.log(`Total sum: ${this.totalSum}`);
          }
  }
  fetchRating() {
    const payload = {
        employeeId: this. userId,
        employeeIdMiddleware: this.userId,
        permissionName: 'Tasks',
        appraisalId: 100001,
        sum: this.totalSum,
        communicationSkill:'1',
        communicationSkillRemarks:'testing',
        interpersonalSkill:'2',
        interpersonalSkillRemarks:'testing',
        abilityToPlanTheWork:'3',
        abilityToPlanTheWorkRemarks:'testing',
    };

    this.reviewservice.fetchRating(payload).then(
      (response: any) => {
        console.log(response);
        this.detail = response;
        localStorage.setItem('appraisalInfo', JSON.stringify(response));
        this.logEntries();
      },
      (error) => {
        console.error('Error fetching appraisal info:', error);
      }
    );
  }
  logEntries(){
    console.log(this.detail);
  }


}
  // submitForm() {
  //   console.log('Form values:', this.reviewForm.value);

  // }


  // fetchRating() {
  //   const payload = {
  //       employeeId: this. userId,
  //       employeeIdMiddleware: this.userId,
  //       permissionName: 'Tasks',
  //       appraisalId: 100001,
  //       sum: this.totalSum,
  //       communicationSkill:'1',
  //       communicationSkillRemarks:'testing',
  //       interpersonalSkill:'2',
  //       interpersonalSkillRemarks:'testing',
  //       abilityToPlanTheWork:'3',
  //       abilityToPlanTheWorkRemarks:'testing',
  //   };

  //   this.reviewservice.fetchRating(payload).then(
  //     (response: any) => {
  //       console.log(response);
  //       this.detail = response;
  //       localStorage.setItem('appraisalInfo', JSON.stringify(response));
  //       this.logEntries();
  //     },
  //     (error) => {
  //       console.error('Error fetching appraisal info:', error);
  //     }
  //   );
  // }
  // logEntries(){
  //   console.log(this.detail);
  // }








