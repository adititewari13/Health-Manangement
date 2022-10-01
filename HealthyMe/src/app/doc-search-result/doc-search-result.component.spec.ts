import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocSearchResultComponent } from './doc-search-result.component';

describe('DocSearchResultComponent', () => {
  let component: DocSearchResultComponent;
  let fixture: ComponentFixture<DocSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocSearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
