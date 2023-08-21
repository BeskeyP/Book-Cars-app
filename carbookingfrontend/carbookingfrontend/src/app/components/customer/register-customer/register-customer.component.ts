import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent {

  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private CustomerService: CustomerService
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
      Whatsupnumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Aadharnumber: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      IsCustomer: "1" ,
    });
  }
 
  onSubmit() {
    if (this.registrationForm.valid) {
      const customerData = this.registrationForm.value;

      this.CustomerService.postCustomerData(customerData).subscribe(
        response => {
          // Handle successful response
          console.log('Registration successful', response);
          alert("The Customer Registration was Submitted!!");
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
