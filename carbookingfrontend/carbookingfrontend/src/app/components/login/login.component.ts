import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }

  onCustomerClick() {
    this.router.navigate(['customer-login']);
  }

  onAdminClick() {
    this.router.navigate(['admin-login']);
  }
}