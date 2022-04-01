import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced7Component } from './pie-chart-advanced7.component';

describe('PieChartAdvanced7Component', () => {
  let component: PieChartAdvanced7Component;
  let fixture: ComponentFixture<PieChartAdvanced7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
