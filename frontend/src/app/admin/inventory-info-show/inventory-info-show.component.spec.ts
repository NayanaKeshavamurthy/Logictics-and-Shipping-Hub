import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryInfoShowComponent } from './inventory-info-show.component';


describe('InventoryInfoShowComponent', () => {
  let component: InventoryInfoShowComponent;
  let fixture: ComponentFixture<InventoryInfoShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryInfoShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryInfoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
