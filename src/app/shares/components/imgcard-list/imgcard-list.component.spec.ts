import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcardListComponent } from './imgcard-list.component';

describe('ImgcardListComponent', () => {
  let component: ImgcardListComponent;
  let fixture: ComponentFixture<ImgcardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgcardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
