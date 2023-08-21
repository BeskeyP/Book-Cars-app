import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent {

  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private adminService: AdminService
  ) {
    this.registrationForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      Emailid: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6)]],
      DOB: ['', Validators.required],
      Gender: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      Country: ['', Validators.required],
      Contactnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Whatsupnumber: ['', Validators.pattern('^[0-9]{10}$')],
      Aadharnumber: ['', Validators.pattern('^[0-9]{12}$')],
      IsCustomer: "0" ,
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const adminData = this.registrationForm.value;

      this.adminService.postAdminData(adminData).subscribe(
        response => {
          // Handle successful response
          console.log('Registration successful', response);
          alert("The Admin Registration was Submitted!!");
          this.router.navigate(['admin-login']);
        },
        error => {
          // Handle error response
          console.error('Error during registration', error);
          // You can display an error message or take other appropriate actions
        }
      );
    } else {
      // Display error messages or take appropriate action
    }
  }
}

























// import { Component } from '@angular/core';
// import { adminModel } from 'src/app/models/adminmodel';
// import { Router } from '@angular/router';
// import { AdminService } from 'src/app/services/admin.service';
// @Component({
//   selector: 'app-register-admin',
//   templateUrl: './register-admin.component.html',
//   styleUrls: ['./register-admin.component.scss']
// })
// export class RegisterAdminComponent {
 
//     Firstname: any;
//     Lastname: any;
//     Emailid: any;
//     pwd: any;
//     DOB: any;
//     Gender: any;
//     Address: any;
//     City: any;
//     State: any;
//     Pincode: any;
//     Country: any;
//     Contactnumber: any;
//     Whatsupnumber: any;
//     Aadharnumber: any;
//     IsCustomer: "0" = "0";

//     postAdminData: adminModel = new adminModel();
//     constructor(private router: Router, private service:AdminService) { }


//   onSubmit() {
//     this.router.navigate(['admin-login'])
//     this.postAdminData.Firstname = this.Firstname;
//     this.postAdminData.Lastname = this.Lastname;
//     this.postAdminData.Emailid = this.Emailid ;
//     this.postAdminData.pwd = this.pwd;
//     this.postAdminData.DOB = this.DOB;
//     this.postAdminData.Gender = this.Gender;
//     this.postAdminData.Address = this.Address;
//     this.postAdminData.City = this.City;
//     this.postAdminData.State = this.State;
//     this.postAdminData.Pincode = this.Pincode;
//     this.postAdminData.Country = this.Country;
//     this.postAdminData.Contactnumber = this.Contactnumber;
//     this.postAdminData.Whatsupnumber = this.Whatsupnumber;
//     this.postAdminData.Aadharnumber = this.Aadharnumber;
//     this.postAdminData.IsCustomer = this.IsCustomer;
//     this.service.postAdminData(this.postAdminData).subscribe(data => {
//       var temp = data
//     })
//   }
// }





