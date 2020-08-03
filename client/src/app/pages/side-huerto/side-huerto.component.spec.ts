import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHuertoComponent } from './side-huerto.component';

describe('SideHuertoComponent', () => {
  let component: SideHuertoComponent;
  let fixture: ComponentFixture<SideHuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideHuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideHuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
