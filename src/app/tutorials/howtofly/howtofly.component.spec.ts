import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoflyComponent } from './howtofly.component';

describe('HowtoflyComponent', () => {
  let component: HowtoflyComponent;
  let fixture: ComponentFixture<HowtoflyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtoflyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
