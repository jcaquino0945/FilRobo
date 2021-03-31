import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaRobotComponent } from './lisa-robot.component';

describe('LisaRobotComponent', () => {
  let component: LisaRobotComponent;
  let fixture: ComponentFixture<LisaRobotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisaRobotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
