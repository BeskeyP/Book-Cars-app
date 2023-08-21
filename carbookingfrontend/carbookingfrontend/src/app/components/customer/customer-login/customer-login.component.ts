import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { customerLoginModel } from 'src/app/models/customermodel';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.scss']
})
export class CustomerLoginComponent {
  Emailid: any;
  pwd: any;

  postCustomerLoginData: customerLoginModel = new customerLoginModel();
  constructor(private service: AuthService, private router: Router) {}


//   onSubmit() {

//     this.service.getallLogins().subscribe((data:any)=>{
//     if(data.Emailid==this.Emailid && data.pwd == this.pwd){
//       this.router.navigate(['/home']);
//       console.log("Successul");
//     }
//     else
//     {
//       console.log("data not found");
//     }
//   })
// }

onSubmit() {
  this.service.getallLogins().subscribe(
    (response: any) => {
      const loginList = response.loginlist; // Access the 'loginlist' property
      const foundLogin = loginList.find((login: any) => {
        return login.Emailid === this.Emailid && login.pwd === this.pwd;
      });

      if (foundLogin) {
        this.router.navigate(['/home']);
        console.log("Successful");
      } else {
        console.log("Data not found");
      }
    },
    (error) => {
      console.error("Error fetching data:", error);
    }
  );
}

onCustomerRegisterClick(){
  this.router.navigate(['/register-Customer']);
}

onCancelclick(){
  this.router.navigate(['']);
}
}
