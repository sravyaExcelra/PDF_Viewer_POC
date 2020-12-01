import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFViewerComponent } from './pdf-viewer.component';

describe('PDFViewerComponent', () => {
  let component: PDFViewerComponent;
  let fixture: ComponentFixture<PDFViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDFViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDFViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
