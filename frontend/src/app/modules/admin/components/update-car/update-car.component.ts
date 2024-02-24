import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css'
})
export class UpdateCarComponent {

  carId: number = this.activatedRoute.snapshot.params['id'];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.getCarById();
  }

  getCarById() {
    this.adminService.getCarById(this.carId).subscribe((response) => {
      console.log(response);
    });
  }

}
