import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerBookingComponent } from './components/customer-booking/customer-booking.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    BookingComponent,
    CustomerBookingComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ]
})
export class CustomerModule { }
