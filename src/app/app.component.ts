import { Component, OnInit } from '@angular/core';
import { TestService } from './test-service.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title : string = 'TheSimplestClicker';
  pollString : string;
  currentScore : number;
  currentStaticAdd : number;
  isBackendAvailible : boolean = true;


  constructor(
    private testService: TestService) { }

  ngOnInit(): void {
    this.currentScore = 0;
    this.currentStaticAdd = 0;
    this.pollBackend();
    interval(1000).subscribe(() => this.incrementPoints());
  }

  private pollBackend() : void {
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

  public clickButton() {
    this.currentScore++;  
  }

}
