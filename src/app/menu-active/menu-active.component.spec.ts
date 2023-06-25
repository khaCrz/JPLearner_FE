import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuActiveComponent } from './menu-active.component';

describe('MenuActiveComponent', () => {
  let component: MenuActiveComponent;
  let fixture: ComponentFixture<MenuActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuActiveComponent]
    });
    fixture = TestBed.createComponent(MenuActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
