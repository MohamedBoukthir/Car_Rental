import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css',
})
export class PostCarComponent {
  addCarForm!: FormGroup;

  selectedFile: File | any;
  imagePreview: string | ArrayBuffer | any;
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
    private fb: FormBuilder,
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addCarForm = this.fb.group({
      year: ['', Validators.required],
      price: ['', Validators.required],
      transmission: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      color: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  AddNewCar() {
    console.log(this.addCarForm.value);
    const formData: FormData = new FormData();
    formData.append('image', this.selectedFile);
    formData.append('year', this.addCarForm.get('year')?.value);
    formData.append('name', this.addCarForm.get('name')?.value);
    formData.append('price', this.addCarForm.get('price')?.value);
    formData.append('transmission', this.addCarForm.get('transmission')?.value);
    formData.append('brand', this.addCarForm.get('brand')?.value);
    formData.append('type', this.addCarForm.get('type')?.value);
    formData.append('color', this.addCarForm.get('color')?.value);
    formData.append('description', this.addCarForm.get('description')?.value);
    // print the formdata in the console
    formData.forEach((value, key) => {
      console.log(key + ', ' + value);
    });

    this.adminService.addCar(formData).subscribe({
      next: (res) => {
        this.toastr.success('Car Added Successfully', 'Success');
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);
      },
      error: (err) => {
        this.toastr.error('Failed to Add Car', 'Error');
      },
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  get year() {
    return this.addCarForm.get('year');
  }

  get price() {
    return this.addCarForm.get('price');
  }

  get transmission() {
    return this.addCarForm.get('transmission');
  }

  get brand() {
    return this.addCarForm.get('brand');
  }

  get type() {
    return this.addCarForm.get('type');
  }

  get color() {
    return this.addCarForm.get('color');
  }

  get description() {
    return this.addCarForm.get('description');
  }
  get name() {
    return this.addCarForm.get('name');
  }
}
