import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { customerModel } from '../models/customermodel';

@Injectable({
    providedIn: 'root'
  })

  export class CustomerService{

    private baseUrlCustomer = 'http://localhost:5000/apiRouter/registerCustomer';

    constructor(private http: HttpClient) { }
  


    postCustomerData(customerData: customerModel){
        var local ={
            Firstname:customerData.Firstname,
            Lastname:customerData.Lastname,
            DOB:customerData.DOB,
            Gender:customerData.Gender,
            Address:customerData.Address,
            City:customerData.City,
            State:customerData.State,
            Pincode:customerData.Pincode,
            Country:customerData.Country,
            Contactnumber:customerData.Contactnumber,
            Whatsupnumber:customerData.Whatsupnumber,
            Aadharnumber:customerData.Aadharnumber,
            Emailid:customerData.Emailid,
            pwd:customerData.pwd,
            IsCustomer:customerData.IsCustomer,
        }
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post(`${this.baseUrlCustomer}`, local, httpOptions)
    }

  }