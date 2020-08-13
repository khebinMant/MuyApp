import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoComponent } from './goto.component';

describe('GotoComponent', () => {
  let component: GotoComponent;
  let fixture: ComponentFixture<GotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
