import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-denied',
  templateUrl: './transaction-denied.component.html',
  styleUrls: ['./transaction-denied.component.scss']
})
export class TransactionDeniedComponent {

  transaction_Id: string = '';
  cancelledDate: string = '';
  reason: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.setCancelledDateToToday(); // Set the cancelledDate to today's date
  }

  setCancelledDateToToday() {
    const today = new Date();
    // Convert the date to a format that the input accepts (YYYY-MM-DD)
    const formattedDate = today.toISOString().split('T')[0];
    this.cancelledDate = formattedDate;
  }


  submitForm() {
    if (!this.transaction_Id || !this.cancelledDate || !this.reason) {
      alert('Please fill in all fields.');
      return;

    }

    const requestBody = {
      Transaction_id: this.transaction_Id,
      CancelledDate: this.cancelledDate,
      Reason: this.reason
    };

    this.http.post('http://localhost:5000/adminRouter/TransactionDenied/TransactionDenied', requestBody)
      .subscribe(
        (response) => {
          console.log('Transaction Denied submitted:', response);
          alert('Booking has been cancelled.');
          this.router.navigate(['']);
          // Handle success, display a success message, etc.
        },
        (error) => {
          console.error('Error submitting Transaction Denied:', error);
          // Handle error, display an error message, etc.
        }
      );
  }

}

