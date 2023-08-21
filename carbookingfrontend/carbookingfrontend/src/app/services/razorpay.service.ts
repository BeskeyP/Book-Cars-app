import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private baseUrl = 'https://api.razorpay.com/v1';

  constructor(private http: HttpClient) {}

  createOrder(amount: number, customerRegisId: any): Observable<any> {
    const data = {
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: 'receipt_' + Math.floor(Math.random() * 100000),
      notes: {
        customerRegisId: customerRegisId
      }
    };
    return this.http.post(`${this.baseUrl}/orders`, data);
  }
}
