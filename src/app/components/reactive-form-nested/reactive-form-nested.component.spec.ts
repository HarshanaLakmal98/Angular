import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormNestedComponent } from './reactive-form-nested.component';

describe('ReactiveFormNestedComponent', () => {
  let component: ReactiveFormNestedComponent;
  let fixture: ComponentFixture<ReactiveFormNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
