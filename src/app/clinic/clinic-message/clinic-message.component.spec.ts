import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicMessageComponent } from './clinic-message.component';

describe('ClinicMessageComponent', () => {
  let component: ClinicMessageComponent;
  let fixture: ComponentFixture<ClinicMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
