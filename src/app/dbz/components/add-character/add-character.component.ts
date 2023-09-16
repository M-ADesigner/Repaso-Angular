import { Component, EventEmitter, Output } from '@angular/core';
import { CharacterProps } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-add-character-dbz',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<CharacterProps> = new EventEmitter();

  public character: CharacterProps = {
    name: '',
    power: 0,
  };

  public emitCharacter: any = (element: CharacterProps) => {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
    // this.character.power = 0;
    // console.log(element);
  };
}
