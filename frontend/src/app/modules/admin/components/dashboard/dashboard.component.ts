import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cars: any = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.cars.push(element);
      });
    });
  }

  deleteCar(id : number){
    console.log(id)
    this.adminService.deleteCar(id).subscribe((res) => {
      // Remove the deleted car from the cars array
      this.cars = this.cars.filter((car: any) => car.id !== id);
      this.toastr.success('Car deleted successfully', 'Success');
    })
  }

}
