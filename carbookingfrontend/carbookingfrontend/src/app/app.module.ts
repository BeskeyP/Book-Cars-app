import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterCustomerComponent } from './components/customer/register-customer/register-customer.component';
import { RegisterAdminComponent } from './components/admin/register-admin/register-admin.component';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CardetailsComponent } from './components/cardetails/cardetails.component';
import { BookingComponent } from './components/booking/booking.component';
import { PaymentComponent } from './components/payment/payment.component';
import { BookedStatusComponent } from './components/booked-status/booked-status.component';
import { TransactionDeniedComponent } from './components/transaction-denied/transaction-denied.component';
import { PostCarDetailsComponent } from './components/post-car-details/post-car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterCustomerComponent,
    RegisterAdminComponent,
    HomeComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    LoginComponent,
    CardetailsComponent,
    BookingComponent,
    PaymentComponent,
    BookedStatusComponent,
    TransactionDeniedComponent,
    PostCarDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
