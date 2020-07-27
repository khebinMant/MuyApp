import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBotonesComponent } from './menu-botones.component';

describe('MenuBotonesComponent', () => {
  let component: MenuBotonesComponent;
  let fixture: ComponentFixture<MenuBotonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBotonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
