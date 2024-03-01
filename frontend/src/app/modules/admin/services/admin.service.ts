import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../authentication/services/storage/storage.service';

const BASE_URL = 'http://localhost:8080/api/v1/admin/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  // function to add a new car
  addCar(carDto: any): Observable<any> {
    return this.http.post(BASE_URL + 'add-car', carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  // function to get all cars
  getAllCars(): Observable<any> {
    return this.http.get(BASE_URL + 'cars', {
      headers: this.createAuthorizationHeader(),
    });
  }

  // function to delete car by id
  deleteCar(id : number): Observable<any> {
    return this.http.delete(BASE_URL + 'car/' + id , {
      headers: this.createAuthorizationHeader(),
    })
  }

  // function to get car by id
  getCarById(id : number): Observable<any> {
    return this.http.get(BASE_URL + 'car/' + id , {
      headers: this.createAuthorizationHeader(),
    })
  }

    // function to update car
  updateCar(carId : number, carDto : any): Observable<any> {
      return this.http.put(BASE_URL + 'car/' + carId , carDto , {
        headers: this.createAuthorizationHeader(),
      })
    }

      // function to get all bookings
  getAllBookings(): Observable<any> {
    return this.http.get(BASE_URL + 'car/bookings', {
      headers: this.createAuthorizationHeader(),
    });
  }

        // function to change booking status
        changeBookingStatus(bookingId: number, status: string): Observable<any> {
          return this.http.get(BASE_URL + `car/booking/${bookingId}/${status}`, {
            headers: this.createAuthorizationHeader(),
          });
        }

    // function to search car
    search(SearchCarDto: any): Observable<any> {
      return this.http.post(BASE_URL + 'car/search', SearchCarDto, {
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
