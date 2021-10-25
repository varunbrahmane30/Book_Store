import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceprderComponent } from './placeprder.component';

describe('PlaceprderComponent', () => {
  let component: PlaceprderComponent;
  let fixture: ComponentFixture<PlaceprderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceprderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceprderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
