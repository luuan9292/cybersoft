import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributDirectiveComponent } from './attribut-directive.component';

describe('AttributDirectiveComponent', () => {
  let component: AttributDirectiveComponent;
  let fixture: ComponentFixture<AttributDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
