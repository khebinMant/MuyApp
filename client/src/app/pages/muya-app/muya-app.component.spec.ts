import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuyaAppComponent } from './muya-app.component';

describe('MuyaAppComponent', () => {
  let component: MuyaAppComponent;
  let fixture: ComponentFixture<MuyaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuyaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuyaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
