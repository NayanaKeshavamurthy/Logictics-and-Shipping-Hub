import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropOffPackageComponent } from './drop-off-package.component';

describe('DropOffPackageComponent', () => {
  let component: DropOffPackageComponent;
  let fixture: ComponentFixture<DropOffPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropOffPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropOffPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
