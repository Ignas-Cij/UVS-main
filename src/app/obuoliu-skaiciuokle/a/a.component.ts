import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  x: number = 0;
  t: number = 0;
  atsakymas: number = 0;

  @Output() childToParent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  skaiciuotiObuolius() {
    this.atsakymas = this.t / this.x;
    this.childToParent.emit(this.atsakymas)    
  }
}
