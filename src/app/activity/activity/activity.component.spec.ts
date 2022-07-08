import { ComponentFixture, TestBed } from '@angular/core/testing';

import { activityComponent } from './activity.component';

describe('activityComponent', () => {
  let component: activityComponent;
  let fixture: ComponentFixture<activityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ activityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(activityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
