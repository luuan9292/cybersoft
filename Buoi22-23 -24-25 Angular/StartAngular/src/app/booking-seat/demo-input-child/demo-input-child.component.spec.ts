import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputChildComponent } from './demo-input-child.component';

describe('DemoInputChildComponent', () => {
  let component: DemoInputChildComponent;
  let fixture: ComponentFixture<DemoInputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
