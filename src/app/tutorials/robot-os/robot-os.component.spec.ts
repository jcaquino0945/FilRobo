import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotOSComponent } from './robot-os.component';

describe('RobotOSComponent', () => {
  let component: RobotOSComponent;
  let fixture: ComponentFixture<RobotOSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotOSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
