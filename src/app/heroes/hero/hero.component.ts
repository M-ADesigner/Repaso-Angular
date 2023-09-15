import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  //Los getter son metodos que puedes ejecutarlo cuando quieras
  public get metodoPap(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(value: string = ''): string {
    return (this.name = value);
  }
  changeAge(value: number = 0): number {
    return (this.age = value);
  }


  resetForm(){
     this.name = 'Ironman';
     this.age = 45;
     
  }
}
