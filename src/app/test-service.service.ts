import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  pollUrl = 'http://jubel.com.pl/test.php?test';

  constructor(private http: HttpClient) { }

  getPollString() : Observable<Object> {
    return this.http.get(this.pollUrl);
  }

}
