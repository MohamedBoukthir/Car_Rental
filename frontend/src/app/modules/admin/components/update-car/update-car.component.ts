import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.css',
})
export class UpdateCarComponent {
  
  carId: number = this.activatedRoute.snapshot.params['id'];
  imgChanged: boolean = false;
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null;
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
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
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

  updateCar() {
    const formData: FormData = new FormData();
    if(this.imgChanged && this.selectedFile)
    {
      formData.append('image', this.selectedFile);
    }
    formData.append('year', this.updateForm.get('year')?.value);
    formData.append('name', this.updateForm.get('name')?.value);
    formData.append('price', this.updateForm.get('price')?.value);
    formData.append('transmission', this.updateForm.get('transmission')?.value);
    formData.append('brand', this.updateForm.get('brand')?.value);
    formData.append('type', this.updateForm.get('type')?.value);
    formData.append('color', this.updateForm.get('color')?.value);
    formData.append('description', this.updateForm.get('description')?.value);
    // print the formdata in the console
    formData.forEach((value, key) => {
      console.log(key + ', ' + value);
    });
    this.adminService.updateCar(this.carId, formData).subscribe({
      next: (res) => {
        this.toastr.success('Car updated Successfully', 'Success');
        this.router.navigateByUrl('/admin/dashboard');
        console.log(res);
      },
      error: (err) => {
        this.toastr.error('Failed to update Car', 'Error');
      },
    });
  }
    


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imgChanged = true;
    this.existingImage = null;
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}
