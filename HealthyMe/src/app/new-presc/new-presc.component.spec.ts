import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPrescComponent } from './new-presc.component';

describe('NewPrescComponent', () => {
  let component: NewPrescComponent;
  let fixture: ComponentFixture<NewPrescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPrescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPrescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
