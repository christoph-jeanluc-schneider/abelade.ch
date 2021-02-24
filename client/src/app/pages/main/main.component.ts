import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public progressActive = false;

  public bytes = 0;
  
  public active = "desktop";

  constructor() { }

  ngOnInit(): void {
  }

  public async click() {
    if (this.progressActive) return;
    this.progressActive = true;
    await this.wait(1000);
    this.progressActive = false;
    this.bytes += 1024;
  }

  private wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

}
