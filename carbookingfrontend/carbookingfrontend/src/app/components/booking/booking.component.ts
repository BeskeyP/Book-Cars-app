import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { adminBookingModel } from 'src/app/models/adminmodel';
import { AdminService } from 'src/app/services/admin.service';
import { BookingDataService } from 'src/app/services/BookingData.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  CustomerRegis_id: any;
  CarDetails_id: any;
  StartDate: any; 
  EndDate: any;
  RentAmount: number = 0; 
  NetAmount: number = 0;
  BookingStatus: string='Booked';


  selectedcar: any;

  constructor(
    private route: ActivatedRoute,
    private service: AdminService,
    private router: Router,
    private bookingDataService: BookingDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const selectedCarId = params['car'];
      if (selectedCarId) {
        this.selectedcar = JSON.parse(selectedCarId);
        this.RentAmount = this.selectedcar.RentAmount; 
        console.log(this.selectedcar);
      }
    });
  }

  onChange() {
    if (this.StartDate && this.EndDate && this.RentAmount) {
      const startDate = new Date(this.StartDate);
      const endDate = new Date(this.EndDate);
       const durationInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
  
      // // If the duration is less than 1 day, set it to 1 day
       const actualDuration = Math.max(durationInDays, 1);
  
       this.NetAmount = this.RentAmount * actualDuration;
    } else {
      this.NetAmount = 0;
    }
  }

  onSubmit() {
    this.onChange();

    const startDate = new Date(this.StartDate);
    const endDate = new Date(this.EndDate);

    const startDateFormatted = `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}`;
    const endDateFormatted = `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}`;
  
    const bookingData: adminBookingModel = {
      CustomerRegis_id: this.CustomerRegis_id,
      CarDetails_id: this.selectedcar.CarDetails_id,
      StartDate: startDateFormatted,
      EndDate: endDateFormatted,
      NetAmount: this.NetAmount,
      BookingStatus: this.BookingStatus
    };
    console.log('Booking Data:', bookingData); 

    this.service.postBookingData(bookingData).subscribe(
      (data) => {
        console.log('Booking data posted successfully:', data);

        this.bookingDataService.bookingData = bookingData; // Set the booking data in the service
        this.router.navigate(['payment'], { queryParams: { netAmount: this.NetAmount } });
      },
      (error) => {
        console.error('Error posting booking data:', error);
      }
    );

  }
  
}