import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedStatusComponent } from './booked-status.component';

describe('BookedStatusComponent', () => {
  let component: BookedStatusComponent;
  let fixture: ComponentFixture<BookedStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookedStatusComponent]
    });
    fixture = TestBed.createComponent(BookedStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
