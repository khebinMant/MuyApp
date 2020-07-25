import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuyaMapComponent } from './muya-map.component';

describe('MuyaMapComponent', () => {
  let component: MuyaMapComponent;
  let fixture: ComponentFixture<MuyaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuyaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuyaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
