import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapLoginComponent } from './baitap-login.component';

describe('BaitapLoginComponent', () => {
  let component: BaitapLoginComponent;
  let fixture: ComponentFixture<BaitapLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
