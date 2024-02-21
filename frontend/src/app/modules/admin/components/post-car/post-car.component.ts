import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  ) { }

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

 

}
