import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterTestComponent } from './scatter-test.component';

describe('ScatterTestComponent', () => {
  let component: ScatterTestComponent;
  let fixture: ComponentFixture<ScatterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
