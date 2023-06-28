import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainM2Component } from './train-m2.component';

describe('TrainM2Component', () => {
  let component: TrainM2Component;
  let fixture: ComponentFixture<TrainM2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainM2Component]
    });
    fixture = TestBed.createComponent(TrainM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
