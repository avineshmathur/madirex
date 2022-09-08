import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QmrComponent } from './qmr.component';

describe('QmrComponent', () => {
  let component: QmrComponent;
  let fixture: ComponentFixture<QmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QmrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
