import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcardFormComponent } from './imgcard-form.component';

describe('ImgcardFormComponent', () => {
  let component: ImgcardFormComponent;
  let fixture: ComponentFixture<ImgcardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
