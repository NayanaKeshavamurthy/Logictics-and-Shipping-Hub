import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickUpDropOffComponent } from './pickUpDropOff.component';

describe('PickUpDropOffComponent', () => {
  let component: PickUpDropOffComponent;
  let fixture: ComponentFixture<PickUpDropOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickUpDropOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickUpDropOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
