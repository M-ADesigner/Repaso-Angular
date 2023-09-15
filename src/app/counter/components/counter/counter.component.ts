import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h4>Counter: {{ counter }}</h4>
     <button (click)="increseBy(+1)">+1</button>
     <button (click)="reset()">Reset</button>
     <button (click)="increseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public title: string = "Mi primer componente en angular";
  public counter:number = 10;

  public increseBy(value:number = 1){
    this.counter += value
  }
  public reset(){
    this.counter = 0
  }

}
