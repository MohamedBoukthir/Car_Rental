import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cars: any = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res) => {
      console.log(res);
      res.forEach((element: any) => {
        // Explicitly define the type of 'element' as 'any'
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.cars.push(element);
      });
    });
  }
}
