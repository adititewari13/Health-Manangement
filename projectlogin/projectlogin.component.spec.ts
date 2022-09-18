import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectloginComponent } from './projectlogin.component';

describe('ProjectloginComponent', () => {
  let component: ProjectloginComponent;
  let fixture: ComponentFixture<ProjectloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
