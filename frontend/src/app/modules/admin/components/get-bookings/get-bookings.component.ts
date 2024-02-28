import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrl: './get-bookings.component.css'
})
export class GetBookingsComponent {

  bookings: any = [];

  constructor(
    private adminService: AdminService
  ) {
    this.getBookings();
   }

  getBookings() {
    this.adminService.getAllBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res;
    })
  }
}
