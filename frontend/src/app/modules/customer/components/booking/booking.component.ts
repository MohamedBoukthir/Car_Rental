import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {

  carId: number = this.activatedRoute.snapshot.params["id"];
  car: any;
  processedImg: any;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCarById();
  }

  getCarById() {
    this.customerService.getCarById(this.carId).subscribe((response) => {
      console.log(response);
      this.processedImg = 'data:image/jpeg;base64,' + response.returnedImg;
      this.car = response;
    })
  }

}
