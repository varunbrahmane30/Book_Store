import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddnewbookComponent } from './adminaddnewbook.component';

describe('AdminaddnewbookComponent', () => {
  let component: AdminaddnewbookComponent;
  let fixture: ComponentFixture<AdminaddnewbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddnewbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddnewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
