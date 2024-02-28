import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrl: './customer-booking.component.css'
})
export class CustomerBookingComponent {

  bookings : any = [];

  constructor(
    private customerService: CustomerService
  ) { 
    this.getMyBookings();
  }

  getMyBookings() {
    this.customerService.getBookingByUserId().subscribe((res) => {
      console.log(res)
      this.bookings = res;
    })
  }



}
