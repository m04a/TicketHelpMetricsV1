import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced3Component } from './pie-chart-advanced3.component';

describe('PieChartAdvanced3Component', () => {
  let component: PieChartAdvanced3Component;
  let fixture: ComponentFixture<PieChartAdvanced3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
