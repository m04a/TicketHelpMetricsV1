import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalGraphicTypesComponent } from './vertical-graphic-types.component';

describe('VerticalGraphicTypesComponent', () => {
  let component: VerticalGraphicTypesComponent;
  let fixture: ComponentFixture<VerticalGraphicTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalGraphicTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalGraphicTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
