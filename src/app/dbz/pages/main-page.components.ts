import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { CharacterProps } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-page-main-dbz',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainPageComponent {
  constructor(private DbzServices: DbzService) {}

  get characters(): CharacterProps[] {
    return [...this.DbzServices.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DbzServices.deleteCharacterById(id);
  }

  onNewCharacter(character: CharacterProps):void {
    this.DbzServices.onNewCharacter(character);
  }
}
