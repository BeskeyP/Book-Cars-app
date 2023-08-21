import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { customerLoginModel } from '../models/customermodel';
import { adminLoginModel } from '../models/adminmodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/apiRouter/login/login';


  constructor(private http: HttpClient) {}

  getallLogins() {
    return this.http.get(`${this.baseUrl}`)
  }

  // getAdminList() {
  //   return this.http.get(`${this.baseUrl}`)
  // }

//   postCustomerLoginData(customerLoginData: customerLoginModel){
//     var local ={
//         Emailid:customerLoginData.Emailid,
//         pwd:customerLoginData.pwd,
//     }
//     const httpOptions = {
//         headers: new HttpHeaders({
//           'Content-Type': 'application/json'
//         })
//       };
//       return this.http.post(`${this.baseUrl}`, local, httpOptions)
// }

// postAdminLoginData(adminLoginData: adminLoginModel){
//   var local ={
//       Emailid:adminLoginData.Emailid,
//       pwd:adminLoginData.pwd,
//   }
//   const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
//     return this.http.post(`${this.baseUrl}`, local, httpOptions)
// }

}

//   get isAuthenticated(): boolean {
//     return this.isAuthenticatedValue;
//   }

//   login(Emailid: string, pwd: string) {
//     const body = { Emailid, pwd };
//     return this.http.post(`${this.baseUrl}/apiRouter/login`, body, { withCredentials: true })
//       .pipe(
//         tap((response: any) => {
//           this.isAuthenticatedValue = true;
//         })
//       );
//   }
// }
