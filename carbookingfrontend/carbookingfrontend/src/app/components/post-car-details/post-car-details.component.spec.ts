import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarDetailsComponent } from './post-car-details.component';

describe('PostCarDetailsComponent', () => {
  let component: PostCarDetailsComponent;
  let fixture: ComponentFixture<PostCarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCarDetailsComponent]
    });
    fixture = TestBed.createComponent(PostCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
