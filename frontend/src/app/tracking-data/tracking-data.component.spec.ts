import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingDataComponent } from './tracking-data.component';

describe('TrackingDataComponent', () => {
  let component: TrackingDataComponent;
  let fixture: ComponentFixture<TrackingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
