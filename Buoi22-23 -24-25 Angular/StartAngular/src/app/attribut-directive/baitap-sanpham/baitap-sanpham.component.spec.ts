import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapSanphamComponent } from './baitap-sanpham.component';

describe('BaitapSanphamComponent', () => {
  let component: BaitapSanphamComponent;
  let fixture: ComponentFixture<BaitapSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
