import { Component, OnInit } from '@angular/core';
import { RegisterService } from '.././register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData;
  registerMessage: string = '';
  isBackendAvailible: boolean = true;
  title: string = 'TheSimplestClicker';

  constructor( private registerService: RegisterService) {
    this.registerData = {
      login: "",
      password: ""
    };
   }

  ngOnInit() {
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

}
