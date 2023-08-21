import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  NetAmount: number = 0; // Initialize with the net amount from booking component
  CustomerRegis_id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AdminService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.NetAmount = +params['netAmount']; // Get the netAmount value from query parameter
      this.CustomerRegis_id = params['customerRegisId'];
    });
  }

  payclick() {
    // Implement payment validation logic here
    if (this.isValidPayment()) {
      // If payment is valid, navigate to booked-status
      this.router.navigate(['booked-status']);
    } else {
      // Show an alert or error message for invalid payment
      alert('Invalid payment details. Please check your card information.');
    }
  }

  cancelclick() {
    this.router.navigate(['']);
  }

  private isValidPayment(): boolean {
    // Implement your payment validation logic here
    // For example, check if card number, expiry, and CVV are valid
    // Return true if valid, false otherwise
    return true; // Replace with actual validation
  }
}
