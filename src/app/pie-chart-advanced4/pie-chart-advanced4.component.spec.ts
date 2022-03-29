import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced4Component } from './pie-chart-advanced4.component';

describe('PieChartAdvanced2Component', () => {
  let component: PieChartAdvanced4Component;
  let fixture: ComponentFixture<PieChartAdvanced4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
