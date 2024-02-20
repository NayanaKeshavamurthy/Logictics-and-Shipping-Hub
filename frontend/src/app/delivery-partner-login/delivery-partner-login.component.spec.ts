import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartnerLoginComponent } from './delivery-partner-login.component';

describe('DeliveryPartnerLoginComponent', () => {
  let component: DeliveryPartnerLoginComponent;
  let fixture: ComponentFixture<DeliveryPartnerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPartnerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPartnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
