import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../authentication/services/storage/storage.service';

const BASE_URL = 'http://localhost:8080/api/v1/customer/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(
    private http: HttpClient
  ) { }


  // function to get all cars
  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + 'cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  // function to get car by id
  getCarById(carId: number): Observable<any> {
    return this.http.get(BASE_URL + 'car/' + carId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }


}
