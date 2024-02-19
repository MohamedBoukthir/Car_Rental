import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api/v1/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  register(registerRequest : any): Observable<any> {
    return this.http.post(BASE_URL + 'register', registerRequest);
  }

  login(loginRequest : any): Observable<any> {
    return this.http.post(BASE_URL + 'login', loginRequest);
  }
}
