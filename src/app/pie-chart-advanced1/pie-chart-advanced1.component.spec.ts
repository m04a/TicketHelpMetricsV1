import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced1Component } from './pie-chart-advanced1.component';

describe('PieChartAdvanced1Component', () => {
  let component: PieChartAdvanced1Component;
  let fixture: ComponentFixture<PieChartAdvanced1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
