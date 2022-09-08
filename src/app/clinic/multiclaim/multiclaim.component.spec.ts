import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticlaimComponent } from './multiclaim.component';

describe('MulticlaimComponent', () => {
  let component: MulticlaimComponent;
  let fixture: ComponentFixture<MulticlaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulticlaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticlaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
