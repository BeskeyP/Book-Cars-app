import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {
  bookingData: any; // You can replace 'any' with a specific interface if you have one

  constructor() {}
}
