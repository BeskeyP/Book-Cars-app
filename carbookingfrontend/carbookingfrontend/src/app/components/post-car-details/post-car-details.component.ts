import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { adminCarDetailsModel } from 'src/app/models/adminmodel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-post-car-details',
  templateUrl: './post-car-details.component.html',
  styleUrls: ['./post-car-details.component.scss']
})
export class PostCarDetailsComponent {

  Carname : any;
  Carnumber : any;
  Color: any;
  Fueltype: any;
  Milage: any;
  Fuelcapacity: any;
  SeatDetails: any;
  Carimage: any;
  RentAmount: any;

  postCarDetails: adminCarDetailsModel = new adminCarDetailsModel();
  constructor(private router: Router, private service:AdminService) { }

  onSubmit() {

    this.postCarDetails.Carname = this.Carname;
    this.postCarDetails.Carnumber = this.Carnumber;
    this.postCarDetails.Color = this.Color ;
    this.postCarDetails.Fueltype = this.Fueltype;
    this.postCarDetails.Milage = this.Milage;
    this.postCarDetails.Fuelcapacity = this.Fuelcapacity;
    this.postCarDetails.SeatDetails = this.SeatDetails;
    this.postCarDetails.Carimage = this.Carimage;
    this.postCarDetails.RentAmount = this.RentAmount;
    this.service.postCarDetails(this.postCarDetails).subscribe(data => {
      var temp = data
    })
    console.log(' Car Details submitted');
    alert(' Car Details submitted');
    this.router.navigate(['home']);
  }

}
