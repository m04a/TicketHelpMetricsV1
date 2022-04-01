import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartAdvanced5Component } from './pie-chart-advanced5.component';

describe('PieChartAdvanced5Component', () => {
  let component: PieChartAdvanced5Component;
  let fixture: ComponentFixture<PieChartAdvanced5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartAdvanced5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartAdvanced5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
