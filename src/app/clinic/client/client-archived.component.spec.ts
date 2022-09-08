import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientArchivedComponent } from './client-archived.component';

describe('ClientArchivedComponent', () => {
  let component: ClientArchivedComponent;
  let fixture: ComponentFixture<ClientArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
