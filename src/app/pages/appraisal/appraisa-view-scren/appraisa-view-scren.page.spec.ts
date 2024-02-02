import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppraisaViewScrenPage } from './appraisa-view-scren.page';

describe('AppraisaViewScrenPage', () => {
  let component: AppraisaViewScrenPage;
  let fixture: ComponentFixture<AppraisaViewScrenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraisaViewScrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppraisaViewScrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
