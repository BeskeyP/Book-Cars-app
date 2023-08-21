import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLoginComponent } from '../app/components/customer/customer-login/customer-login.component';
import { AdminLoginComponent } from '../app/components/admin/admin-login/admin-login.component';
import { RegisterAdminComponent } from './components/admin/register-admin/register-admin.component';
import { RegisterCustomerComponent } from './components/customer/register-customer/register-customer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BookedStatusComponent } from './components/booked-status/booked-status.component';
import { TransactionDeniedComponent } from './components/transaction-denied/transaction-denied.component';
import { PostCarDetailsComponent } from './components/post-car-details/post-car-details.component';



const routes: Routes = [
  { path: '',component: LoginComponent},
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'register-Admin', component: RegisterAdminComponent},
  { path: 'register-Customer', component: RegisterCustomerComponent},
  { path: 'home',component:HomeComponent},
  { path: 'car-details',component:CardetailsComponent},
  { path: 'booking',component:BookingComponent},
  { path: 'payment',component:PaymentComponent},
  { path: 'booked-status',component:BookedStatusComponent},
  { path: 'TransactionDenied',component:TransactionDeniedComponent},
  { path: 'Post-CarDetails',component:PostCarDetailsComponent},
  { path: '**', redirectTo: '' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
