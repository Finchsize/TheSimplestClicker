import { Component, OnInit } from '@angular/core';
import { TestService } from './test-service.service';
import { interval } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from './register.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'TheSimplestClicker';
  pollString: string;
  currentScore: number;
  currentStaticAdd: number;
  isBackendAvailible: boolean = true;
  cookieValue: string = '';
  registerData;
  loginData;
  registerMessage: string = '';

  constructor(
    private testService: TestService,
    private cookieService: CookieService,
    private registerService: RegisterService,
    private loginService: LoginService) {
    this.registerData = {
      login: "",
      password: ""
    };
    this.loginData = {
      login: "",
      password: ""
    };
  }

  ngOnInit(): void {
    this.currentScore = 0;
    this.currentStaticAdd = 0;
    this.pollBackend();
    interval(1000).subscribe(() => this.incrementPoints());
    interval(1000).subscribe(() => this.sendPointsToServer());
    this.cookieValue = this.cookieService.get('SessionId');
    this.cookieValue = this.cookieValue.trim();
  }

  private pollBackend(): void {
    this.testService.getPollString()
      .toPromise()
      .then((data: Object) => {
        this.pollString = data['value'];
      }
      )
      .catch(() => { this.isBackendAvailible = false }
      );

  }

  private incrementPoints(): void {
    this.currentScore = this.currentScore += this.currentStaticAdd;
  }

  private onSubmitLogin(): void {
    this.loginService.loginUser(this.loginData)
      .toPromise()
      .then((data: Object) => {
        this.setCookie(data['value']);
      }
      )
      .catch(() => { this.isBackendAvailible = false }
      );
  }

  private onSubmitRegister(): void {
    this.registerService.registerUser(this.registerData)
      .toPromise()
      .then((data: Object) => {
        this.registerMessage = data['value'];
      }
      )
      .catch(() => { this.isBackendAvailible = false }
      );
  }

  private setCookie(cookieValue: string) {
    this.cookieService.set('SessionId', cookieValue);
  }

  private sendPointsToServer(): void {

  }

  public clickButton() {
    this.currentScore++;
  }

}
