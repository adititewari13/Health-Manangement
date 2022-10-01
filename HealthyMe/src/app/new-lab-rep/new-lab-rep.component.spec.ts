import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLabRepComponent } from './new-lab-rep.component';

describe('NewLabRepComponent', () => {
  let component: NewLabRepComponent;
  let fixture: ComponentFixture<NewLabRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLabRepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLabRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
