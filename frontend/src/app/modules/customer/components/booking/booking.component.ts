import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../../../../authentication/services/storage/storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  carId: number = this.activatedRoute.snapshot.params["id"];
  car: any;
  processedImg: any;
  validateForm!: FormGroup;
  dateFormate = 'DD-MM-YYYY'

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      toDate: ["", Validators.required],
      fromDate: ["", Validators.required]
    })
    this.getCarById();
  }

  getCarById() {
    this.customerService.getCarById(this.carId).subscribe((response) => {
      console.log(response);
      this.processedImg = 'data:image/jpeg;base64,' + response.returnedImg;
      this.car = response;
    })
  }

  bookCar(data: any) {
    console.log(data);
    let booking = {
      toDate: data.toDate,
      fromDate: data.fromDate,
      userId: StorageService.getUserId(),
      carId: this.carId
    }
    this.customerService.carBooking(booking).subscribe((res) => {
      console.log(res);
      this.toastr.success('Car Booked Successfully');
      this.router.navigateByUrl('/customer/dashboard');
    }, error => {
      this.toastr.error('Error while booking car');
    })
  }

  get toDate() {
    return this.validateForm.get('toDate');
  }

  get fromDate() {
    return this.validateForm.get('fromDate');
  }

}
