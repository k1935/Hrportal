import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url: any = 'https://ad0b-203-92-37-218.ngrok-free.app/';
  header: any = {
    'ngrok-skip-browser-warning': 'true',
  };
  ticket = new Subject();


  constructor(private http: HttpClient) { }

// submit button api
  submitRatings(data: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url + 'employeeEvaluation', data, {
          headers: this.header,
        })
        .subscribe(
          (res: any) => {
            resolve(res);
            console.log('res', res);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
// employee api
fetchAppraisalInfo(data: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.url + 'allAppraisalInfoOfAnEmp', data, {
          headers: this.header,
        })
        .subscribe(
          (res: any) => {
            resolve(res);
            console.log('res', res);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
// manager screen api
fetchEmployee(data: any) {
  return new Promise((resolve, reject) => {
    this.http
      .post(this.url + 'appraisalListL2L3L4L5', data, {
        headers: this.header,
      })
      .subscribe(
        (res: any) => {
          resolve(res);
          console.log('res', res);
        },
        (error) => {
          reject(error);
        }
      );
  });
 }

//  employee rating
fetchRating(data: any) {
  return new Promise((resolve, reject) => {
    this.http
      .post(this.url + 'anAppraisalDetailsOfEmpEval', data, {
        headers: this.header,
      })
      .subscribe(
        (res: any) => {
          resolve(res);
          console.log('res', res);
        },
        (error) => {
          reject(error);
        }
      );
  });
 }

//  setAppraisalData(data: any) {
//   this.appraisalDataSubject.next(data);
// }
setTicket(ticketCount: any) {
  console.log(ticketCount);
  this.ticket.next(ticketCount);
}
}
