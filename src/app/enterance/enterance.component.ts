import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enterance-page',
  templateUrl: './enterance.component.html',
  styleUrls: ['./enterance.component.css']
})
export class EnteranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onLogging() {
    console.log(this)
  }
}
