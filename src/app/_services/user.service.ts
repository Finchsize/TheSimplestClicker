// Angular imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Additional classes imports
import { Observable } from 'rxjs';
// Project imports
import { environment } from '../../environments/environment';
import { RegisterData } from '../_models/registerData';
import { LoginData } from '../_models/loginData'
import { User } from '../_models/user';


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    register(registerData : RegisterData) : Observable<Object> {
        return this.http.post(`${environment.apiUrl}/register.php`, registerData);
    }

    login(loginData : LoginData) : Observable<Object> {
        
    }

}