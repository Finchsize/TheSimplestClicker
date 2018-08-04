import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = "http://jubel.com.pl/register.php"

  constructor(private http: HttpClient) { }

  registerUser(registerData) : Observable<Object> {
    return this.http.post(this.registerUrl, JSON.stringify(registerData));
  }
}
