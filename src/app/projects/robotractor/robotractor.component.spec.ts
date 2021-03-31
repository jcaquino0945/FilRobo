import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotractorComponent } from './robotractor.component';

describe('RobotractorComponent', () => {
  let component: RobotractorComponent;
  let fixture: ComponentFixture<RobotractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
