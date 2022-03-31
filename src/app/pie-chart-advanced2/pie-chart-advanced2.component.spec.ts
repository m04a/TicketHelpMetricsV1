import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced2Component } from './pie-chart-advanced2.component';

describe('PieChartAdvanced2Component', () => {
  let component: PieChartAdvanced2Component;
  let fixture: ComponentFixture<PieChartAdvanced2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
