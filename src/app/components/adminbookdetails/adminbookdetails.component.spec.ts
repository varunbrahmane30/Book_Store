import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbookdetailsComponent } from './adminbookdetails.component';

describe('AdminbookdetailsComponent', () => {
  let component: AdminbookdetailsComponent;
  let fixture: ComponentFixture<AdminbookdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbookdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
