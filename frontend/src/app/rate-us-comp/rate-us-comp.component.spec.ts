import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateUsCompComponent } from './rate-us-comp.component';

describe('RateUsCompComponent', () => {
  let component: RateUsCompComponent;
  let fixture: ComponentFixture<RateUsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateUsCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateUsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
