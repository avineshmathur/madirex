import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedproComponent } from './medpro.component';

describe('MedproComponent', () => {
  let component: MedproComponent;
  let fixture: ComponentFixture<MedproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
