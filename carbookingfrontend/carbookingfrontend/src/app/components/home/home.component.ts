import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

interface SeatDetails {
  SeatCapacitydetails: any[]; 
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  SeatDetailsData: SeatDetails = { SeatCapacitydetails: [] };
  CarDetailsData: any;
  SeatDetails: any;

constructor(private service: AdminService,private router: Router) { }

ngOnInit() {
  this.getSeatDetails()
}

getSeatDetails() {
  this.service.getSeatDetails().subscribe(
    (data:any) => {
      if (data && data.SeatCapacitydetails) {
        this.SeatDetailsData = data as SeatDetails; 
      } else {
        console.log('No Seat details available.');
      }
    },
    (error) => {
      console.error('Error fetching Seat details:', error);
    }
  );
}

handleSeatClick(seat: any) {
  
  console.log('Seat clicked:', seat);
  // this.router.navigate(['car-details']);
  
  this.router.navigate(['car-details'], { queryParams: { seat: seat.SeatDetails } });
  
}

}