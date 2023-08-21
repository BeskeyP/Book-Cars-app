import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDeniedComponent } from './transaction-denied.component';

describe('TransactionDeniedComponent', () => {
  let component: TransactionDeniedComponent;
  let fixture: ComponentFixture<TransactionDeniedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionDeniedComponent]
    });
    fixture = TestBed.createComponent(TransactionDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
