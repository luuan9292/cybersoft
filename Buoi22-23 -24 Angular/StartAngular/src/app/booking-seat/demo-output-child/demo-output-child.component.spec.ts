import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoOutputChildComponent } from './demo-output-child.component';

describe('DemoOutputChildComponent', () => {
  let component: DemoOutputChildComponent;
  let fixture: ComponentFixture<DemoOutputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoOutputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
