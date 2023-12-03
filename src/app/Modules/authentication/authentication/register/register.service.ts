import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerUserUrl: string = 'http://localhost:5041/api/AppUser/Registration'
  loginUserUrl : string = 'http://localhost:5041/api/AppUser/Login'
  constructor(private http: HttpClient) { }
  registerUser(model : any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers as needed
    });
    return this.http.post<any>(this.registerUserUrl, model,  { headers });
  }
  loginUser(model : any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.loginUserUrl, model,  { headers });
  }
}
