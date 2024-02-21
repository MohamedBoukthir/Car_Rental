import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css'
})
export class PostCarComponent {

  addCarForm! : FormGroup;

  selectedFile: File | any = null ;
  imagePreview: string | ArrayBuffer | any = null ;	
  listOfOption: Array<{ label : string, value: string }> =[];
  listOfBrands = ['BMW','Audi','Mercedes','Toyota','Honda','Nissan','Mazda','Ford','Chevrolet','Jeep','Kia','Hyundai','Volkswagen','Fiat','Peugeot','Renault','Skoda','Volvo','Suzuki','Subaru','Mitsubishi','Lexus','Infiniti','Acura','Cadillac','Buick','Lincoln','Chrysler','Dodge','Tesla','Jaguar','Land Rover','Porsche','Ferrari','Maserati','Lamborghini','Bentley','Rolls Royce','McLaren','Bugatti','Lotus','Alfa Romeo','Aston Martin','Morgan','Mini','Smart','Opel','Seat','Citroen','Dacia','Lada','Saab','Daewoo','Lancia','Tata','Mahindra','Isuzu','Proton','Geely','Chery','Great Wall','Zotye','Changan','BYD','Brilliance','JAC','Haval','Dongfeng','Foton','GAC','BAIC','Chery', 'Other'];
  listOfType = ['Hybird', 'Electric', 'Petrol', 'Diesel', 'Gas', 'Other'];
  listOfColor = ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Silver', 'Grey', 'Brown', 'Orange', 'Purple', 'Pink', 'Other'];
  listOfTransmission = ['Automatic', 'Manual', 'Semi-Automatic'];


  constructor(
    private fb: FormBuilder
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
    })
  }

  AddNewCar(){
    console.log(this.addCarForm.value);
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('year', this.addCarForm.get('year')?.value);
    formData.append('price', this.addCarForm.get('price')?.value);
    formData.append('transmission', this.addCarForm.get('transmission')?.value);
    formData.append('brand', this.addCarForm.get('brand')?.value);
    formData.append('type', this.addCarForm.get('type')?.value);
    formData.append('color', this.addCarForm.get('color')?.value);
    formData.append('description', this.addCarForm.get('description')?.value);
    console.log(formData);
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

}
