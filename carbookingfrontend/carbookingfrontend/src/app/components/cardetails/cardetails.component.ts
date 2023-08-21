import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';


interface Cardetails {
  Carname: any;
  Carnumber: any;
  Color: any;
  Fueltype: any;
  Milage: any;
  Fuelcapacity: any;
  SeatDetails: any;
  Carimage: any;
  RentAmount: any;
}

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  CarDetailsData: Cardetails[] = [];

  constructor(private route: ActivatedRoute, private service: AdminService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const selectedSeat = params['seat'];
      // console.log(selectedSeat);
      if (selectedSeat) {
        this.getCarDetailsBySeat(selectedSeat);
      }
    });
  }

  getCarDetailsBySeat(seat: string) {
    this.service.getCarDetails().subscribe((data: any) => {
      this.CarDetailsData = data.cardetails.filter((data:any) => data.SeatDetails ==seat )
    });
  }

  bookCar(car: any){
    // console.log(car);
    this.router.navigate(['booking'], { queryParams: { car:JSON.stringify(car)} });
  }

}
