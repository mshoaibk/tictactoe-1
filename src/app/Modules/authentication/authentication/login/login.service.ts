import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ConstantService} from '../../../../Services/constant.service'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private ConstantSer: ConstantService) { }
  loginUser(model : any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(this.ConstantSer.loginUserUrl, model,  { headers });
  }
}
