import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsignupComponent } from './projectsignup.component';

describe('ProjectsignupComponent', () => {
  let component: ProjectsignupComponent;
  let fixture: ComponentFixture<ProjectsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
