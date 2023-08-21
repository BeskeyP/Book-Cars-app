import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { adminBookingModel, adminCarDetailsModel, adminModel} from '../models/adminmodel';

@Injectable({
    providedIn: 'root'
  })

  export class AdminService{

    private baseUrlAdmin = 'http://localhost:5000/apiRouter/registerAdmin';

    private baseUrlcardetails = 'http://localhost:5000/adminRouter/CarDetails/CarDetails';

    private baseUrlSeatDetails = 'http://localhost:5000/adminRouter/SeatCapacity/SeatCapacity';

    private baseUrlTransaction = 'http://localhost:5000/adminRouter/Transaction/Transaction';

    private baseUrlTransactionDenied = 'http://localhost:5000/adminRouter/TransactionDenied/TransactionDenied';

    constructor(private http: HttpClient) { }


    getCarDetails() {
      return this.http.get(`${this.baseUrlcardetails}`)
    }

      
    getSeatDetails(){
      return this.http.get(`${this.baseUrlSeatDetails}`)
    }

    getTransactionDetails(){
      return this.http.get(`${this.baseUrlTransaction}`)
    }

    getTransactionDeniedDetails(){
      return this.http.get(`${this.baseUrlTransactionDenied}`)
    }

    postAdminData(adminData: adminModel){
        var local ={
            Firstname:adminData.Firstname,
            Lastname:adminData.Lastname,
            DOB:adminData.DOB,
            Gender:adminData.Gender,
            Address:adminData.Address,
            City:adminData.City,
            State:adminData.State,
            Pincode:adminData.Pincode,
            Country:adminData.Country,
            Contactnumber:adminData.Contactnumber,
            Whatsupnumber:adminData.Whatsupnumber,
            Aadharnumber:adminData.Aadharnumber,
            Emailid:adminData.Emailid,
            pwd:adminData.pwd,
            IsCustomer:adminData.IsCustomer,
        }
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(`${this.baseUrlAdmin}`, local, httpOptions)
    }

    postBookingData(adminData: adminBookingModel){
      const booking ={
        CustomerRegis_id :adminData.CustomerRegis_id ,
        CarDetails_id :adminData.CarDetails_id ,
        StartDate:adminData.StartDate,
        EndDate:adminData.EndDate,
        NetAmount:adminData.NetAmount,
        BookingStatus :adminData.BookingStatus,
      }
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        return this.http.post(this.baseUrlTransaction, booking, httpOptions);
  }

postCarDetails(adminData:adminCarDetailsModel){
  const carDetails ={
    Carname : adminData.Carname,
    Carnumber: adminData.Carnumber ,
    Color: adminData.Color ,
    Fueltype: adminData.Fueltype ,
    Milage:adminData.Milage ,
    Fuelcapacity :adminData.Fuelcapacity ,
    SeatDetails: adminData.SeatDetails ,
    Carimage: adminData.Carimage ,
    RentAmount : adminData.RentAmount,
  }
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.post(this.baseUrlcardetails, carDetails, httpOptions);
}
  }