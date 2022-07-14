import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAssignmentComponent } from './activityassignment.component';

describe('ProjectsComponent', () => {
  let component: ActivityAssignmentComponent;
  let fixture: ComponentFixture<ActivityAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
