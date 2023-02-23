import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChlidComp1Component } from './chlid-comp1.component';

describe('ChlidComp1Component', () => {
  let component: ChlidComp1Component;
  let fixture: ComponentFixture<ChlidComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChlidComp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChlidComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
