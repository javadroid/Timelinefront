import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPersonnelsComponent } from './projectpersonnels.component';

describe('ProjectsComponent', () => {
  let component: ProjectPersonnelsComponent;
  let fixture: ComponentFixture<ProjectPersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPersonnelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
