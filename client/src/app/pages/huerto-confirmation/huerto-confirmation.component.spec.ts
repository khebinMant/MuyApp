import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuertoConfirmationComponent } from './huerto-confirmation.component';

describe('HuertoConfirmationComponent', () => {
  let component: HuertoConfirmationComponent;
  let fixture: ComponentFixture<HuertoConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuertoConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuertoConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
