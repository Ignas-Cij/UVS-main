import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obuoliu-skaiciuokle',
  templateUrl: './obuoliu-skaiciuokle.component.html',
  styleUrls: ['./obuoliu-skaiciuokle.component.scss']
})
export class ObuoliuSkaiciuokleComponent implements OnInit {

  num:number;

  constructor() { }

  ngOnInit(): void {
  }

  childToParent(num) {
    this.num = num;
  }
}
