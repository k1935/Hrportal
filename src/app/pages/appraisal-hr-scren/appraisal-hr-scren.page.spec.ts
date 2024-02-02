import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppraisalHrScrenPage } from './appraisal-hr-scren.page';

describe('AppraisalHrScrenPage', () => {
  let component: AppraisalHrScrenPage;
  let fixture: ComponentFixture<AppraisalHrScrenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisalHrScrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppraisalHrScrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
