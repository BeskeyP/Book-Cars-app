import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { BookingDataService } from 'src/app/services/BookingData.service';


// interface TransactionDetails {
//   CustomerRegis_id : any;
//   CarDetails_id : any;
//   StartDate: any;
//   EndDate: any;
//   NetAmount: any;
//   BookingStatus : any;
// }

@Component({
  selector: 'app-booked-status',
  templateUrl: './booked-status.component.html',
  styleUrls: ['./booked-status.component.scss']
})
export class BookedStatusComponent implements OnInit {

  bookingData: any;


  constructor( private bookingDataService: BookingDataService,private router: Router) {}


  ngOnInit() {
    this.bookingData = this.bookingDataService.bookingData; // Get the booking data from the service
  }

  // Go Back button action
  goBack() {
    this.router.navigate(['/home']); // Replace 'home' with your desired route
  }

  // Cancel Booking button action
  confirmCancel() {
    const confirmCancel = confirm('Are you sure you want to cancel this booking?');
    this.router.navigate(['TransactionDenied']); 
    
    if (confirmCancel) {
      // Perform cancel booking logic here
      console.log('Booking cancelled.');
      
    }
  }
}