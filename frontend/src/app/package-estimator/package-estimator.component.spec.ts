import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageEstimatorComponent } from './package-estimator.component';

describe('PackageEstimatorComponent', () => {
  let component: PackageEstimatorComponent;
  let fixture: ComponentFixture<PackageEstimatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageEstimatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageEstimatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
