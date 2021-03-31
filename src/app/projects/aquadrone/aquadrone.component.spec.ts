import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquadroneComponent } from './aquadrone.component';

describe('AquadroneComponent', () => {
  let component: AquadroneComponent;
  let fixture: ComponentFixture<AquadroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquadroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AquadroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
