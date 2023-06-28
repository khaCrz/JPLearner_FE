import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainM3Component } from './train-m3.component';

describe('TrainM3Component', () => {
  let component: TrainM3Component;
  let fixture: ComponentFixture<TrainM3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainM3Component]
    });
    fixture = TestBed.createComponent(TrainM3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
