import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcardDashboardComponent } from './imgcard-dashboard.component';

describe('ImgcardDashboardComponent', () => {
  let component: ImgcardDashboardComponent;
  let fixture: ComponentFixture<ImgcardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcardDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
