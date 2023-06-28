import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainM1Component } from './train-m1.component';

describe('TrainActiveComponent', () => {
  let component: TrainM1Component;
  let fixture: ComponentFixture<TrainM1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainM1Component]
    });
    fixture = TestBed.createComponent(TrainM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
