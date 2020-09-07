import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSetupComponent } from './start-setup.component';

describe('StartSetupComponent', () => {
  let component: StartSetupComponent;
  let fixture: ComponentFixture<StartSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
