import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css',
})
export class UpdateCarComponent {
  
  carId: number = this.activatedRoute.snapshot.params['id'];
  existingImage: string | null = null;
  updateForm!: FormGroup;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfBrands = [
    'BMW',
    'Audi',
    'Mercedes',
    'Toyota',
    'Honda',
    'Nissan',
    'Mazda',
    'Ford',
    'Chevrolet',
    'Jeep',
    'Kia',
    'Hyundai',
    'Volkswagen',
    'Fiat',
    'Peugeot',
    'Renault',
    'Skoda',
    'Volvo',
    'Suzuki',
    'Subaru',
    'Mitsubishi',
    'Lexus',
    'Infiniti',
    'Acura',
    'Cadillac',
    'Buick',
    'Lincoln',
    'Chrysler',
    'Dodge',
    'Tesla',
    'Jaguar',
    'Land Rover',
    'Porsche',
    'Ferrari',
    'Maserati',
    'Lamborghini',
    'Bentley',
    'Rolls Royce',
    'McLaren',
    'Bugatti',
    'Lotus',
    'Alfa Romeo',
    'Aston Martin',
    'Morgan',
    'Mini',
    'Smart',
    'Opel',
    'Seat',
    'Citroen',
    'Dacia',
    'Lada',
    'Saab',
    'Daewoo',
    'Lancia',
    'Tata',
    'Mahindra',
    'Isuzu',
    'Proton',
    'Geely',
    'Chery',
    'Great Wall',
    'Zotye',
    'Changan',
    'BYD',
    'Brilliance',
    'JAC',
    'Haval',
    'Dongfeng',
    'Foton',
    'GAC',
    'BAIC',
    'Chery',
    'Other',
  ];
  listOfType = ['Hybird', 'Electric', 'Petrol', 'Diesel', 'Gas', 'Other'];
  listOfColor = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Black',
    'White',
    'Silver',
    'Grey',
    'Brown',
    'Orange',
    'Purple',
    'Pink',
    'Other',
  ];
  listOfTransmission = ['Automatic', 'Manual', 'Semi-Automatic'];

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      year: ['', Validators.required],
      price: ['', Validators.required],
      transmission: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
    });
    this.getCarById();
  }

  getCarById() {
    this.adminService.getCarById(this.carId).subscribe((response) => {
      // console.log(response);
      const carDto = response;
      this.existingImage = 'data:image/jpeg;base64,' + response.returnedImg;
      console.log(carDto);
      console.log(this.existingImage);
      this.updateForm.patchValue(carDto);
    });
  }
}
