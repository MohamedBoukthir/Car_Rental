import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrl: './get-bookings.component.css'
})
export class GetBookingsComponent {

  bookings: any = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.getBookings();
   }

  getBookings() {
    this.adminService.getAllBookings().subscribe((res) => {
      console.log(res);
      this.bookings = res;
    })
  }

  changeBookingStatus(bookingId: number, status: string) {
    console.log(bookingId, status);
    this.adminService.changeBookingStatus(bookingId, status).subscribe((res) => {
      console.log(res);
      this.toastr.success('Booking status updated successfully');
      this.getBookings();
    }, (err) => {
      console.log(err);
      this.toastr.error('Failed to update booking status');
    })
  }
}
