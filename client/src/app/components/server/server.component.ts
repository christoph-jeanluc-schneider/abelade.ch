import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  inputs: ['type'],
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public type: string;
  public src;

  constructor() { }

  ngOnInit(): void {
    this.src = `/assets/img/${this.type}.png`;
  }

}
