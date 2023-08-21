import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { adminLoginModel } from 'src/app/models/adminmodel';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
navigateTo(arg0: string) {
throw new Error('Method not implemented.');
}
  Emailid: any;
  pwd: any;
  
  // loginFailed: boolean = false;

  postAdminLoginData: adminLoginModel = new adminLoginModel();
  constructor(private service: AuthService, private router: Router) {}


  // onSubmit() {

  //   this.service.getallLogins().subscribe((data:any)=>{

  //     if(data.Emailid===this.Emailid && data.pwd === this.pwd){
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

  onAdminRegisterClick(){
    this.router.navigate(['/register-Admin']);
  }

  onCancelClick(){
    this.router.navigate(['']);
  }
}


