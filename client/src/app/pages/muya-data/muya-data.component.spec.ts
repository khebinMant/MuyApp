import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuyaDataComponent } from './muya-data.component';

describe('MuyaDataComponent', () => {
  let component: MuyaDataComponent;
  let fixture: ComponentFixture<MuyaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuyaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuyaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
