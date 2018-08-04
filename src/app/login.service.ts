import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://jubel.com.pl/login.php"

  constructor(private http: HttpClient) { }

  loginUser(loginData) : Observable<Object> {
    let Params = new HttpParams();
    Params = Params.append('login', loginData.login);
    Params = Params.append('password', loginData.password);
    // return this.http.get(this.loginUrl);
    return this.http.get(this.loginUrl, { params: Params });
  }
}
