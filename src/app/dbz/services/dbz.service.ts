import { Injectable } from '@angular/core';
import { CharacterProps } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: CharacterProps[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  public onNewCharacter(character: CharacterProps): void {
    const newCharacter: CharacterProps = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // public onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  public deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (characters) => characters.id !== id
    );
  }
}
