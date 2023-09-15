import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'Mi primer componente en angular';
  public counter: number = 10;

  public increseBy(value: number = 1) {
    if (this.counter <= 0) {
      this.counter = 0;
      console.log("Se ejecuta")
    }
      this.counter += value;
  }
  public reset() {
    this.counter = 0;
  }

  // public decrementarBy(value: number = 1){
  //   if(this.counter <= 0){
  //     this.counter = 0;
  //   }else{
  //     this.counter-=value;
  //   }
  // }
}
