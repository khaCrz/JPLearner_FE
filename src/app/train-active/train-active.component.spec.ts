import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainActiveComponent } from './train-active.component';

describe('TrainActiveComponent', () => {
  let component: TrainActiveComponent;
  let fixture: ComponentFixture<TrainActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainActiveComponent]
    });
    fixture = TestBed.createComponent(TrainActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
