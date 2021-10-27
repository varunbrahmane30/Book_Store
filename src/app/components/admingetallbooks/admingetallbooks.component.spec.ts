import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingetallbooksComponent } from './admingetallbooks.component';

describe('AdmingetallbooksComponent', () => {
  let component: AdmingetallbooksComponent;
  let fixture: ComponentFixture<AdmingetallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmingetallbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
