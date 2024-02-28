import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerBookingComponent } from './components/customer-booking/customer-booking.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookingComponent,
    CustomerBookingComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
