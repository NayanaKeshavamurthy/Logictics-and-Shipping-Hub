import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleDeliveryComponent } from './reschedule-delivery.component';

describe('RescheduleDeliveryComponent', () => {
  let component: RescheduleDeliveryComponent;
  let fixture: ComponentFixture<RescheduleDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
